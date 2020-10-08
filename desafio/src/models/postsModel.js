const helper = require("../helpers/helper")

const post = [
    {
        id: 1,
        titulo: "Primeiro post",
        conteudo: "Este é o primeiro post do blog.",  
        dataCriacao: helper.novaData(),
        tags: ["reprograma", "desafio"]   
    }
]

module.exports = post;