const category = require("../dao/category");
const sendData = require("./sendData")
module.exports = {
    getCategory(req,res){
        category.getCategory((err, data) => {
            sendData.sendJsonStr(res,JSON.stringify({
                status: 200,
                msg: "ok",
                result:data
            }))
        })
    }
}