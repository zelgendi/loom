// Accesso al pannello annunci: avvia il login GitHub (OAuth App).
// Variabili da impostare in Cloudflare Pages: GITHUB_CLIENT_ID e GITHUB_CLIENT_SECRET.
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  if (url.searchParams.has('check')) {
    return Response.json({ loom_auth: Boolean(env.GITHUB_CLIENT_ID && env.GITHUB_CLIENT_SECRET) }, { headers: { 'Cache-Control': 'no-store' } });
  }
  if (!env.GITHUB_CLIENT_ID) return new Response('Accesso non configurato.', { status: 500 });
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  const state = Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
  const gh = new URL('https://github.com/login/oauth/authorize');
  gh.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
  gh.searchParams.set('redirect_uri', url.origin + '/api/auth/callback');
  gh.searchParams.set('scope', 'repo');
  gh.searchParams.set('state', state);
  return new Response(null, {
    status: 302,
    headers: {
      Location: gh.toString(),
      'Set-Cookie': `loom_oauth_state=${state}; Path=/api/auth; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
      'Cache-Control': 'no-store'
    }
  });
}
