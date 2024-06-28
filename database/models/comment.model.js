import sequelize  from "../connection.js"
import { DataTypes } from 'sequelize';
import userModel from "./user.model.js";
import postModel from "./post.model.js";
const commentModel= sequelize.define('comment',{
    content:{
        type:DataTypes.STRING(150),
        allowNull:false
    }

},{
    timestamps: false,
})
userModel.hasMany(commentModel,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE",
})
commentModel.belongsTo(userModel)

postModel.hasMany(commentModel,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE",
})
commentModel.belongsTo(postModel)

export default commentModel