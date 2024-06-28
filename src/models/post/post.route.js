import {Router} from "express"
import * as postController from './controller/post.controller.js'

const router=Router();
router.post("/addPost",postController.addPost)
router.get("/getPosts",postController.allPosts)
router.get('/:id',postController.getPost)
router.put('/:id',postController.updatePost)
router.delete('/:id',postController.deletePost)
export default router