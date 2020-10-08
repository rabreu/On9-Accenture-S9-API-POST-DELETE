const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blogController');

/**
@route GET posts
@desc Get all posts
@access Public
@endpoint http://localhost:port/posts
**/
router.get("/posts", blogController.getAll)

/**
@route POST posts
@desc Add a post
@access Public
@endpoint http://localhost:port/posts/add
**/
router.post("/posts/add", blogController.addPost)

/**
@route DELETE posts
@desc Delete a post
@access Public
@endpoint http://localhost:port/posts/:id
**/
router.delete('/posts/:id', blogController.delPost)


module.exports = router;