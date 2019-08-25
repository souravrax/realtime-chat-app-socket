//Make connection

const socket  = io.connect('http://localhost:4000');

//query DOM

const message = document.getElementById('message');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');