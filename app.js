// this is the api being called]
// this calls the .env file and gets  the  AUTH TOKEN AND ACCOUNT_SID
require('dotenv').config();
const axios = require("axios");
const options = {
  method: 'GET',
  url: 'https://ajith-messages.p.rapidapi.com/getMsgs',
  params: {category: 'love'},
  headers: {
    'X-RapidAPI-Key': '82d561d07bmsha447f10c33da1f6p1f1af8jsnbb7e8029615a',
    'X-RapidAPI-Host': 'ajith-messages.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	   const messagesent = response.data.Message
     //the begining of the twillo api call
     const accountSid = process.env.TWILIO_ACCOUNT_SID;
     const authToken = process.env.TWILIO_AUTH_TOKEN;
     const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    //message sent is the response of the api being sent to the user to the number 
     body: messagesent,
     from: '+19894743986',
     to: '+2348188380154'
   })
  .then(message => console.log(message.sid))
  .catch(err=> console.log(err));  

}).catch(function (error) {
	console.error(error);
});
