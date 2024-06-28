import sequelize  from "../connection.js"
import { DataTypes } from 'sequelize';
import userModel from "./user.model.js";
const postModel= sequelize.define('post',{
    title:{
        type:DataTypes.STRING(150),
        allowNull:false

    },
    content:{
        allowNull: false,
        type: DataTypes.STRING(150)
    }

},{
    timestamps:false
})


export default postModel;
