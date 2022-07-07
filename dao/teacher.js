const mysqlPoll = require("../config/mysqlPoll");
const table = "e_teacher"
module.exports = {
    findTeacher(data){
        const sql = `select * from ${table} where tid = ?`
        return  mysqlPoll.connectAsync(sql,data)
    }
}