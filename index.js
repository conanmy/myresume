require('babel-register');
const server = require('./server/index').default;
const PORT = process.env.PORT || 80;
server.listen(PORT, function () {
  console.log('Server listening on', PORT);
});