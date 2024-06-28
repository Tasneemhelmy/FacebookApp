import commentModel from "../../../../database/models/comment.model.js";
import postModel from "../../../../database/models/post.model.js";
import userModel from "../../../../database/models/user.model.js";

/*6- Implement routes and controllers for creating, reading,
updating, and deleting comments.*/

export const addComment=async(req,res,next)=>{
    const {userId,postId}=req.body
    const post= await postModel.findByPk(postId);
    const user= await userModel.findByPk(userId);
    if(post&&user){
        const comment=await commentModel.create(req.body)
        return res.status(200).json({message:"comment added",comment})
    }
    res.status(409).json({message:"User or post not found🤔"})

}
//----------------------------------------------
export const getComments=async(req,res,next)=>{
    const comment=await commentModel.findAll()
    res.status(200).json({message:"comments fetched",comment})

}
//----------------------------------------------------

export const updateComment=async(req,res,next)=>{
    const {userId,content}=req.body
        const commentExist=await commentModel.update({content},{
            where:{
                id:req.params.id,
                userId 
            }
        })
    
        commentExist[0]? res.status(200).json({message:"Comment Updated"}):res.status(404) .json({message:"comment not found or not authorized 🤐"});
    }
//---------------------------------------------------------------
export const deletePost=async(req,res,next)=>{
    const {userId}=req.body
    const commentExist=await commentModel.destroy({
        where:{
            id:req.params.id,
            userId
        }
    })
    console.log(commentExist)
    commentExist? res.status(200).json({message:"Comment Deleted"}):res.status(404) .json({message:"Comment not found or not authorized 🤐"});
}
//---------------------------------------------------------------
          //-----------------------------------------
    
/*9- Special endpoint to get a specific user with a specific post and
post’s comments.*/
export const userWithPostsAndComments=async(req,res,next)=>{
    const user=await userModel.findAll({
        include:{
            model:postModel,
            attributes:["title"],
            include:{
                model:commentModel,
                attributes:["content"]
        }
    }
    })


    res.status(200).json({message:"users fetched ",user});
}
//----------------------------------------------------------