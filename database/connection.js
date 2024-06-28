import { Sequelize } from "sequelize";
const sequelize = new Sequelize('assignment_6', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log("fail to connect",err)
})
export default sequelize
