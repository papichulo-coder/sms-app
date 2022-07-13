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
	console.log(response.data.Message);
}).catch(function (error) {
	console.error(error);
});