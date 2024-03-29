const express = require("express");
const {redirectUri} = require("./src/services/authService");
const AuthCallbackService = require("./src/services/authCallbackService");

const config = require("./src/config/index");

const app = express();

app.get("/", (req, res) => {
  console.log('masuk')
  const auth = redirectUri();
  res.redirect(auth);
});

app.get("/oauth-github-callback", (req, res) => {
  return AuthCallbackService.callback(req, res);
});

app.listen(config.config.port);
console.log(`App listening on http://localhost:${+config.config.port}`);
