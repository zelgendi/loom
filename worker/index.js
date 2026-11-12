// Worker del sito LOOM su Cloudflare: serve i file statici e gestisce il login del pannello.
import { onRequestGet as authStart } from '../functions/api/auth/index.js';
import { onRequestGet as authCallback } from '../functions/api/auth/callback.js';

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    if (request.method === 'GET' && pathname === '/api/auth') return authStart({ request, env });
    if (request.method === 'GET' && pathname === '/api/auth/callback') return authCallback({ request, env });
    return env.ASSETS.fetch(request);
  }
};
