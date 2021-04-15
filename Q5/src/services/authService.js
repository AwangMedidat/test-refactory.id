const config = require("../config");

function redirectUri() {
  console.log(config.config.clientId)
    return `${config.config.oauthUrl}/authorize?client_id=${config.config.clientId}`;
  }

module.exports = {
    redirectUri
}
