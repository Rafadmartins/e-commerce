const express = require('express');
const path = require('path')

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.resolve("views"));


app.get('/home', (req,res)=>{
    res.render(path.resolve("views/pages", "home"))
})

app.get('/categorias', (req,res)=>{
    res.render(path.resolve("views/pages", "categorias"))
})

app.get('/detalhes', (req,res)=>{
    res.render(path.resolve("views/pages", "detalhes"))
})

app.listen(3000);