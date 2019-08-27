//Make connection

const socket  = io.connect('http://localhost:4000');

//query DOM

const message = document.getElementById('message');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');


//Emit events

btn.addEventListener('click', ()=>{
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
})

//Listen for events

socket.on('chat', (data)=>{
    output.innerHTML+='<p class ="message"><strong>" + data.handle + ": </strong>" + data.message + "</p>';
})