import {Router} from "express"
import * as commentController from './controller/comment.controller.js'
const router=Router();

router.post('/',commentController.addComment)
router.get('/',commentController.getComments)
router.get("/userWithPostsAndComments",commentController.userWithPostsAndComments)
router.put('/:id',commentController.updateComment)
router.delete('/:id',commentController.deletePost)

export default router