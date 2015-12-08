var serial = require("serialport");
var SerialPort = serial.SerialPort;
var express = require('express');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
port = new SerialPort('/dev/cu.usbmodem411', {
    baudrate: 9600
})

port.open(function (error) {
  if (error) return console.log(`failed to open: ${error}`);

  startServer();
  port.on('data', function(data) {
    if(data[0] == 1) emit();
  });
});

function startServer(){
    app.use(express.static('public'));
    http.listen(8000, function(){
        console.log('open http://localhost:8000');
    });
}

function emit(){
    io.emit('button', 1);
}

serial.list(function (err, ports) {
  ports.forEach(function(port) {
    console.log(port.comName, port.manufacturer);
  });
});
