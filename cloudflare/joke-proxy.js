export default {
  async fetch(request, env, ctx) {
    const cache = caches.default;
    const cacheKey = new Request(request.url, request);
    let response = await cache.match(cacheKey);
    if (!response) {
      // Busca da API externa
      response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
      // Clona a resposta para poder armazenar no cache
      const data = await response.clone().text();
      response = new Response(data, response);
      response.headers.set('Cache-Control', 'public, max-age=600'); // 10 minutos
      ctx.waitUntil(cache.put(cacheKey, response.clone()));
    }
    return response;
  }
}; 