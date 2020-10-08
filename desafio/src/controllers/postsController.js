const { request } = require("express")
const { response } = require("../app")
let posts = require("../models/postsModel")
const helper = require("../helpers/helper")

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(posts)
}

const addPost = (request, response) => {
    console.log(request.url)
    body = request.body

    if(typeof body.titulo == 'undefined' || typeof body.conteudo == 'undefined')
        return response.status(201).send("Erro 201")

    newPost = {
        id: helper.obterNovoValor(posts),
        titulo: body.titulo,
        conteudo: body.conteudo,
        dataCriacao: helper.novaData(),
        tags: body.tags
    }

    posts.push(newPost)

    return response.status(200).json(newPost)
}

const delPost = (request, response) => {
    const { id } = request.params
   
    const newPosts = posts.filter(post => post.id != id)
    posts = newPosts

    return response.json({ message: "Post deleted"})
}

module.exports = {
    getAll,
    addPost,
    delPost
}