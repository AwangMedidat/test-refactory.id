
if (process.env.NODE_ENV !== "development"){  
  require("dotenv").config();
}

const config = {
    port: process.env.PORT,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    oauthUrl: process.env.OAUTH_URL,
    apiUrl: process.env.API_URL,
}
const envFound = require("dotenv").config();

if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = { config };
