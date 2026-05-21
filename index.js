export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Jika mengakses halaman utama (https://cdn2.slirpdrive.com/)
    if (pathname === '/' || pathname === '') {
      return new Response('cdn2.slirpdrive.com - CDN Embed Mirror Service is Active.', {
        status: 200,
        headers: { 'content-type': 'text/plain' }
      });
    }

    // Mengarahkan path video utuh ke server cdn2.aceimg.com
    // Contoh: cdn2.slirpdrive.com/16fca76a2.mp4 -> cdn2.aceimg.com/16fca76a2.mp4
    const targetUrl = `https://cdn2.aceimg.com${pathname}${url.search}`;

    // Lakukan redirect 302 ke video embed aceimg
    return Response.redirect(targetUrl, 302);
  },
};
