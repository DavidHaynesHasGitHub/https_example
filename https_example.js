var https = require('https');

var options = {
  host: 'www.example.com',
  path: '/'
};

var callback = function(response) {
  console.log('In response to handler callback!')
  console.log('response', response)
}

console.log('I am about to make the request!');

https.request(options, callback).end();

console.log('I have made the request!');
