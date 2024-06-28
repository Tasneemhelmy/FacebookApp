import bcryptjs from "bcryptjs"
import userModel from "../../../../database/models/user.model.js"

/*4- Implement routes and controllers for user registration, login,
and logout. (email must be unique)*/
//------------------------signUp------------------------------------
export const singUp=async(req,res,next)=>{
    const {email,password}=req.body
    const hash=bcryptjs.hashSync(password,8)
    req.body.password=hash
    const newUser= await userModel.findOrCreate({
        where:{email},
        defaults : req.body
    }) 

    if(newUser[1]==false)  return res.status(409).json({message:"Email aready exist!!"})
        return res.status(201).json({message:"User created!!",newUser})
}

//----------------------------login----------------------------------

export const logIn =async(req,res,next)=>{
    const {email,password}=req.body
    
    const userExist= await userModel.findOne({
        where:{email}
    })    
    if(userExist){
    const match=bcryptjs.compareSync(password,userExist.password)

    if(match) 
            return res.status(200).json({message:`Hi ${userExist.name} 👋🏻`,userId:userExist.id})

    return res.status(401).json({message:"invalid password 🤐"})

    }

    return res.status(404).json({message:"Sorry, you should signUp first🤔"})

}