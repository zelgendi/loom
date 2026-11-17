// Worker del sito LOOM su Cloudflare: serve i file statici, gestisce il login del pannello e l'invio dei moduli.
import { onRequestGet as authStart } from '../functions/api/auth/index.js';
import { onRequestGet as authCallback } from '../functions/api/auth/callback.js';
import { onRequestPost as contatto } from '../functions/api/contatto.js';

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    if (request.method === 'GET' && pathname === '/api/auth') return authStart({ request, env });
    if (request.method === 'GET' && pathname === '/api/auth/callback') return authCallback({ request, env });
    if (request.method === 'POST' && pathname === '/api/contatto') return contatto({ request, env });
    return env.ASSETS.fetch(request);
  }
};
