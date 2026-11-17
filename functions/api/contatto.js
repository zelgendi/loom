// Moduli del sito (Contatti e "Richiedi una visita"): riceve i campi e li manda per email a Zena
// tramite Cloudflare Email Service (binding EMAIL in wrangler.jsonc, destinatario fisso e verificato).
const FROM = { email: 'sito@loomhouse.it', name: 'Sito LOOM House' };
const TO = 'z.elgendi@gmail.com';

function reply(request, ok) {
  const wantsJson = (request.headers.get('Accept') || '').includes('application/json');
  if (wantsJson) {
    return Response.json({ success: ok }, { status: ok ? 200 : 500, headers: { 'Cache-Control': 'no-store' } });
  }
  // Invio senza JavaScript: si torna a una pagina del sito
  return Response.redirect(new URL(ok ? '/grazie.html' : '/contatti.html', request.url).toString(), 303);
}

export async function onRequestPost({ request, env }) {
  let form;
  try { form = await request.formData(); } catch { return reply(request, false); }

  // Campo trappola per i bot: se compilato fingiamo che sia andato tutto bene
  if ((form.get('_honey') || '').toString().trim()) return reply(request, true);

  const nome = (form.get('Nome') || '').toString().trim().slice(0, 200);
  const email = (form.get('email') || '').toString().trim().slice(0, 200);
  if (!nome || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !form.get('Privacy')) return reply(request, false);

  const subject = ((form.get('_subject') || 'Nuova richiesta dal sito LOOM').toString().slice(0, 200)) + ' · ' + nome;
  const righe = [];
  for (const [k, v] of form.entries()) {
    if (k.startsWith('_') || typeof v !== 'string') continue;
    const val = v.trim().slice(0, 5000);
    if (val) righe.push(k + ': ' + val);
  }
  const text = righe.join('\n\n') + '\n\nPer rispondere basta usare "Rispondi": la risposta va a ' + email + '.';

  try {
    await env.EMAIL.send({ from: FROM, to: TO, replyTo: { email, name: nome }, subject, text });
    return reply(request, true);
  } catch (e) {
    console.error('Invio email non riuscito', e && e.code, e && e.message);
    return reply(request, false);
  }
}
