import express from 'express'
import cors from 'cors'
import bootstrap from './src/bootstrap.js'
import userModel from './database/models/user.model.js';
import postModel from './database/models/post.model.js';
import commentModel from './database/models/comment.model.js';
const app=express()
const port=process.env.PORT||3000;
app.use(cors());
bootstrap(app,express)
app.listen(port,(error)=>{
    if(error) console.log(error)
        else console.log("server running");
    });
    