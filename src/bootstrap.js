import sequelize  from "../database/connection.js";
import userRoute from './models/user/user.route.js'
import postRouter from './models/post/post.route.js'
import commentRoute from './models/comment/comment.route.js'

const bootstrap=(app,express)=>{
    sequelize.sync({alter:false})
    app.use(express.json())
    app.use('/user',userRoute)
    app.use('/post',postRouter)
    app.use('/comment',commentRoute)
    app.use('*',(req,res)=>{
        res.json({message:"Not Found 🥲"});
    })
}
export default bootstrap;