const router = require ('express').Router();
const postController = require ('../controlles/post.controller');


//CRUD ENDPOINTS:

//Get a post:
router.get('/', postController.readPost);

//Create a post:
router.post('/', postController.createPost);

//Update a post:
router.post('/', postController.updatePost);

//Delete a post:
router.delete('/:id', postController.deletePost);

module.exports = router;