const request = require('../request');
const response = require('../response');

function makeResponse(url, data) {
  request.send(url, data);
  return response.read();
}

const responseData = makeResponse('https://google.com', 'hello');
console.log(responseData);