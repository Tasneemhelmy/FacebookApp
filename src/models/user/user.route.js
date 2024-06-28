import {Router} from "express"
import * as userController from './controller/user.controller.js'
const router=Router();
router.post('/singUp',userController.singUp)
router.post('/logIn',userController.logIn)

export default router;