const mysqlPoll = require("../config/mysqlPoll")
const table = "e_banners"
module.exports = {
    /**
     * 得到Banner的信息
     * @param {Array} data
     * @param cb
     */
    getBannerInfo(data,cb){
        const sql = `select * from ${table} where isshow =  1`;
        mysqlPoll.connect(sql,data,cb).then(r=>{
            console.log(r)
        })
    }
}