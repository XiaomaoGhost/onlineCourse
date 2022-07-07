const mysqlPoll = require("../config/mysqlPoll");
const table = "e_video"
module.exports = {
    findVied(data){
        const sql = `select * from ${table} where cid = ?`;
        return  mysqlPoll.connectAsync(sql,data)
    }
}