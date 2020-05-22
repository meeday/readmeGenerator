const axios = require("axios");

const api = {
  async userInfo(username) {
    const results = await axios.get(`https://api.github.com/users/${username}`)
    // console.log(results.data)
    return results.data;
    
  }
};
module.exports = api;