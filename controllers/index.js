const path = require('path');

const indexController ={
    exibirHome:((req, res)=>{
        res.render(path.resolve("views/pages", "home"))
    }),

    exibirDetalhes:((req, res)=>{
        res.render(path.resolve("views/pages", "detalhes"))
    }),

    exibirCategorias:((req, res)=>{
        res.render(path.resolve("views/pages", "categorias"))
    }),
}

module.exports = indexController;