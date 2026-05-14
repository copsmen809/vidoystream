export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname; 

    // Regex untuk mengambil ID video (misal dari /pkbievy0jp33.mp4 jadi pkbievy0jp33)
    const match = pathname.match(/\/([^\/.]+)\.mp4$/);

    if (match) {
      const videoId = match[1]; 
      // Link dasar dari Vidoy sesuai screenshot yang lu kasih
      const targetUrl = 'https://vidzp.com/e/${videoId}`;

      // Redirect ke link stream asli
      return Response.redirect(targetUrl, 301);
    }

    // Response default kalau link-nya gak pake .mp4
    return new Response('Sistem Siap! Gunakan format: cdn2.vid7me.id/ID_VIDEO.mp4', {
      headers: { 'content-type': 'text/plain' },
    });
  },
};
