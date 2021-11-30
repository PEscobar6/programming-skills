require('dotenv').config()
var main = require('./index.js');

var event = {
	"Records": [
        {
          "eventVersion": "2.0",
          "eventTime": "1970-01-01T00:00:00.000Z",
          "requestParameters": {
            "sourceIPAddress": "127.0.0.1"
          },
          "responseElements": {
            "x-amz-id-2": "EXAMPLE123/5678abcdefghijklambdaisawesome/mnopqrstuvwxyzABCDEFGH",
            "x-amz-request-id": "EXAMPLE123456789"
          }
        }
      ]
};

(async function init() {
  const response = await main.handler(event, null);
  console.log('----- Final response -----', response);
})();

