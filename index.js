const express = require('express');
const socket = require('socket.io');
const app = express();
const PORT = process.env.PORT | 4000;

app.use(express.static('public'));  //sending index.html from pubic folder

const server = app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})

const io = socket(server);

io.on('connection', (socket)=>{
    console.log('Made socket connection', socket.id);


    socket.on('chat', (data)=>{
        io.sockets.emit('chat', data);
    })
})




