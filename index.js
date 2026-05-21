export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Jika mengakses root/halaman utama cdn2.slirpdrive.com
    if (pathname === '/' || pathname === '') {
      return new Response('CDN Embed Mirror Service is Active.', {
        status: 200,
        headers: { 'content-type': 'text/plain' }
      });
    }

    // Langsung arahkan path utuh beserta ekstensinya ke cdn2.aceimg.com
    // Contoh: cdn2.slirpdrive.com/16fca76a2.mp4 -> cdn2.aceimg.com/16fca76a2.mp4
    const targetUrl = `https://cdn2.aceimg.com${pathname}${url.search}`;

    // Redirect 302 agar langsung mengarah ke video embed asli
    return Response.redirect(targetUrl, 302);
  },
};
