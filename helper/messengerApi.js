const axios = require('axios');
require('dotenv').config();

const TOKEN = process.env.TOKEN;
const PAGE_ID = process.env.PAGE_ID;

const sendMessage = async (senderId, message) => {

  let options = {
    method: 'POST',
    url: `https://graph.facebook.com/v11.0/${PAGE_ID}/messages`,
    params: {
      access_token: TOKEN,
    },
    data: {
      recipient: {
        id: senderId
      },
      messaging_type: 'RESPONSE',
      message: {
        text: message
      }
    }
  };

  

  let response;
  console.log("1 = " + options.url);
  console.log("2 = " + options.params);

  axios.post(options)
    .then((resp) => {
      let response = resp.data;
      console.log("3 = " + response);
    })
    .catch((error) => {
      console.log("4 = " + error);
      console.log(error.message);
    });

  if (response != null && response['status'] == 200 && response['statusText'] === 'OK') {
    return 1;
  } else {
    return 0;
  }
};

module.exports = {
  sendMessage
}
