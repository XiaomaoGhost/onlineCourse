const subject = require("../dao/subject");
const sendData = require("./sendData")
module.exports = {
     getSubject(req,res){
        subject.getSubject().then(data=>{
            sendData.sendJsonStr(res,JSON.stringify({
                status: 200,
                msg: "ok",
                result:data
            }))
        })
    }
}