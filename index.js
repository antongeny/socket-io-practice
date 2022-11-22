const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);



/**
Homework
Here are some ideas to improve the application:
link: https://socket.io/get-started/chat
link: adding react hooks https://socket.io/how-to/use-with-react-hooks
//*Broadcast a message to connected users when someone connects or disconnects.
//*Add support for nicknames.
//*Don’t send the same message to the user that sent it. Instead, append the message directly as soon as he/she presses enter.
//*Add “{user} is typing” functionality.
//*Show who’s online.
//*Add private messaging.
//!Share your improvements!
*/
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });





server.listen(3000, () => {
  console.log('listening on *:3000');
});