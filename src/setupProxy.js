const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/v2', { target: 'https://m.wowdsgn.com',changeOrigin:true }));
<<<<<<< HEAD
  app.use(proxy('/pages', { target: 'https://m.wowdsgn.com',changeOrigin:true }));

};
=======
  app.use(proxy('/topic', { target: 'https://m.wowdsgn.com',changeOrigin:true }));
};
>>>>>>> b7bdf9795659d1b170ed18d160ed080438560c0b
