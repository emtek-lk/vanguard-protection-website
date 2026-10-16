import { handleContact } from './contact.js';

// Static site is served from ./dist by Workers Static Assets.
// Only /api/* reaches this code (see run_worker_first in wrangler.jsonc).
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/contact') {
      if (request.method !== 'POST') {
        return new Response(JSON.stringify({ ok: false, error: 'method_not_allowed' }), {
          status: 405,
          headers: { 'content-type': 'application/json', allow: 'POST' },
        });
      }
      return handleContact(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
