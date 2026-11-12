// Accesso al pannello annunci: riceve il codice da GitHub, lo scambia con il token
// e lo passa alla finestra del pannello che ha aperto il login.
function page(origin, payload) {
  const data = JSON.stringify(Object.assign({ loom_auth: 1 }, payload)).replace(/</g, '\\u003c');
  const html = `<!doctype html><meta charset="utf-8"><title>Accesso</title>
<p style="font:16px system-ui;padding:24px">${payload.token ? 'Accesso eseguito, puoi chiudere questa finestra.' : 'Accesso non completato. Chiudi questa finestra e riprova.'}</p>
<script>if(window.opener){window.opener.postMessage(${data},${JSON.stringify(origin)});window.close()}</script>`;
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'Set-Cookie': 'loom_oauth_state=; Path=/api/auth; HttpOnly; Secure; SameSite=Lax; Max-Age=0'
    }
  });
}

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const cookie = request.headers.get('Cookie') || '';
  const saved = (cookie.match(/(?:^|;\s*)loom_oauth_state=([a-f0-9]+)/) || [])[1];
  if (!code || !state || !saved || state !== saved) return page(url.origin, {});
  const res = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'User-Agent': 'loom-admin' },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: url.origin + '/api/auth/callback'
    })
  });
  const json = await res.json().catch(() => ({}));
  return page(url.origin, json.access_token ? { token: json.access_token } : {});
}
