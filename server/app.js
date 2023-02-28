const {socket} = require('socket.io');

const express = require('express');

const app = express();
const http = require('http').createServer(app);
const path = require('path');
const port = 8080;

const io = require('socket.io')(http);

app.get('/',(request,res) => {
    res.sendFile(path.join(__dirname,'html/index.html'));
});

http.listen(port, () => {
    console.log(`Actually listening !`);
})


let rooms = []
io.on('connection', (socket) => {
    console.log(`[Server-side] Socket : ${socker.id}`);
})



io.on('playerData', (player) => {
    console.log(`[Server-side] Plqyer : ${player.name}`)
})
