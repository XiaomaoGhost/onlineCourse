const  areas = require("../dao/areas");
const {sendJsonStr} = require("./sendData")

module.exports = {
    getAreasInfo(req,res){
        areas.getAreasInfo([],(err,data)=>{
            const sendData = {
                status: 200,
                msg: "ok",
                result:data
            }
            sendJsonStr(res,JSON.stringify(sendData))
        })
    }
}