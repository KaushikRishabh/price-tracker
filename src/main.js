//using axios:
const axios = require("axios");
const coinListURL = "https://api.coingecko.com/api/v3/coins/list";
axios.get(coinListURL).then((resp) => {
  console.log(resp.data);
});
