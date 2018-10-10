var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 3000);
app.use(express.static('public'));
var socket = require('socket.io');
var io = socket(server);

function newConnection(socket) {
    console.log('New Connection : '+socket.id);
}