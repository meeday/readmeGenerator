// require axios module for api call
const axios = require("axios");
// create const that holds results of the api call and returns the required data
const api = {
  async userInfo(username) {
    const results = await axios.get(`https://api.github.com/users/${username}`)
    // console.log(results.data)
    return results.data;
    
  }
};
// api exported for use in the index.js file
module.exports = api;