const axios = require("axios");
const config = require("../config");

function getUserInfo(token) {
    axios({
        method: "get",
        url: `${config.config.apiUrl}/users`,
        headers: {
          Authorization: "token " + token,
        },
      }).then((response) => {
        return response.data;
      });
  }

module.exports = getUserInfo
