import { Sequelize } from "sequelize";
const sequelize = new Sequelize('b1rivbil6iqxve567pkc', 'ulv9u8b2bkpwwrtc', 'zrynIrB421DXV9aAxQCn', {
    host: 'b1rivbil6iqxve567pkc-mysql.services.clever-cloud.com',
    dialect: 'mysql'
});

sequelize.authenticate().then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log("fail to connect",err)
})
export default sequelize
