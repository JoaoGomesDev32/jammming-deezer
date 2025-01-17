const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://api.deezer.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '', // Remove "/api" do início das solicitações.
            },
        })
    );
};