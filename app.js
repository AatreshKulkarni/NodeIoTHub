var connectionString = '[IoT Hub device connection string]';
 
// use factory function from AMQP-specific package
var clientFromConnectionString = require('azure-iot-device-amqp').clientFromConnectionString;
 
// AMQP-specific factory function returns Client object from core package
var client = clientFromConnectionString(connectionString);
 
// use Message object from core package
var Message = require('azure-iot-device').Message;
 
var connectCallback = function (err) {
  if (err) {
    console.error('Could not connect: ' + err);
  } else {
    console.log('Client connected');
    var msg = new Message('some data from my device');
    client.sendEvent(msg, function (err) {
      if (err) {
          console.log(err);
        console.log(err.toString());
      } else {
        console.log('Message sent');
      };
    });
  };
};
 
 
client.open(connectCallback);