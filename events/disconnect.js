const tokens = require('../tokens.json');
exports.run = (client, CloseEvent) => {
  client.login(tokens.dAPI)
    .then(console.log('reconnected'))
    .catch(console.log(error));
};