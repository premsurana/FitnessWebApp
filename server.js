var app = require('express');
var express = app();
var server = app.listen(process.env.PORT || 3000);
app.use(express.static('public'));
var io = socket(server);

function newConnection(socket) {
    console.log('New Connection : '+socket.id);
}