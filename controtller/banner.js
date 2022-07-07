const banner = require("../dao/banner");
const {host,filepath} = require("../config/serverPath")
const {sendJsonStr} = require("./sendData")
const bannerFolder = "/banners/";

module.exports = {
    getBannerInfo(req,res){
        banner.getBannerInfo([],(err,data)=>{
            const result = data.map(item=>{
                item.image_src = host+filepath+bannerFolder+ item.image_src
                return item;
            })
            const sendData = {
                msg: "ok",
                status: 200,
                result
            }
            sendJsonStr(res,JSON.stringify(sendData))
        })
    }
}