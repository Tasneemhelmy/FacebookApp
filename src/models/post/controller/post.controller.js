import userModel from "../../../../database/models/user.model.js"
import postModel from "../../../../database/models/post.model.js"

/*5- Implement routes and controllers for creating, reading,
updating, and deleting posts.*/

export const addPost=async(req,res,next)=>{
    const existId= await userModel.findByPk(req.body.userId)
    if(existId) {
        const post=await postModel.create(req.body)
        return res.status(200).json({message:"post added",post})
    }
    res.status(404).json({message:"User not found 🤔"})
}
//---------------------------------------------------------
export const allPosts=async(req,res,next)=>{
    const posts=await postModel.findAll({
        include:{
            model:userModel,
            attributes:{
                exclude:["password"]
            }
        }
    })
    res.status(200).json({message:"done",posts});
}
//-----------------------------------------------------------

export const updatePost=async(req,res,next)=>{
    const {content,userId}=req.body
    const postExist=await postModel.update({content},{
        where:{
            id:req.params.id,
            userId 
        }
    })
    postExist[0]? res.status(200).json({message:"updated"}):res.status(404) .json({message:"post not found or not authorized 🤐"});
}
//-----------------------------------------------------------------
export const deletePost=async(req,res,next)=>{
    const {userId}=req.body
    const postExist=await postModel.destroy({
        where:{
            id:req.params.id,
            userId 
        }
    })
    console.log(postExist)
    postExist? res.status(200).json({message:"deleted"}):res.status(404) .json({message:"post not found or not authorized 🤐"});
}
//------------------------------------------------------------------

           //-------------------------------------------------------

//10- Get a specific post with the author.
export const getPost=async(req,res,next)=>{
    const post=await postModel.findByPk(req.params.id,{
        include:{
            model:userModel,
            attributes:{
                exclude:["password"]
            }
        }
    })
    post? res.status(200).json({message:"done",post}):res.status(404).json({message:"User not found 🤔"});
}