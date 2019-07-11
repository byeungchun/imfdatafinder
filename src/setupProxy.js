const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/REST/SDMX_JSON.svc', {target: 'http://dataservices.imf.org'}));
}