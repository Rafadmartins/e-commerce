
const indexController ={
    exibirHome:((req, res)=>{
        res.render("pages/home")
    }),

    exibirDetalhes:((req, res)=>{
        res.render("pages/detalhes")
    }),

    exibirCategorias:((req, res)=>{
        res.render("pages/categorias")
    }),
    exibirCarrinho: ((req, res)=>{
        res.render("pages/carrinho")
    }),
}

module.exports = indexController;