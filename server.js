const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/home', (req,res)=>{
    res.sendFile(__dirname + '/views/pages/home.html')
})

app.get('/categorias', (req,res)=>{
    res.sendFile(__dirname + '/views/pages/categorias.html')
})


app.listen(3000);