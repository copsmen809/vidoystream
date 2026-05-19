export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname; 

    // Regex tetap sama, ngambil ID sebelum ".mp4"
    const match = pathname.match(/\/([^\/.]+)\.mp4$/);

    if (match) {
      const videoId = match[1]; 
      
      // Kita pakai domain awal mereka yang stabil buat nge-redirect
      const targetUrl = `https://mp4abc.de/e/${videoId}`;

      // Biarkan sistem mp4abc.de yang pusing mikirin domain embed akhirnya
      return Response.redirect(targetUrl, 301);
    }

    return new Response('Sistem Aktif! Format URL: cdn2.vid7me.id/ID_VIDEO.mp4', {
      headers: { 'content-type': 'text/plain; charset=utf-8' },
    });
  },
};
