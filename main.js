const express = require('express');
const app = express();

const PORT = process.env.PORT ||   3000;


app.get ('/style.css', (req,res)=> {
    res.sendFile (__dirname + '/public/style.css');
})


app.get('/style.css', (req,res) => {
    res.sendFile (__dirname + '/public/style.css');
})


app.listen(PORT, () => {
    console.log('servidor  rodando em http://localhost:$ {PORT}');
})

