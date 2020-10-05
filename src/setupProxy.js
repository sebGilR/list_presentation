const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/hiring.json',
    createProxyMiddleware({
      target: 'https://fetch-hiring.s3.amazonaws.com',
      changeOrigin: true,
    })
  );

  app.listen(3000);
};