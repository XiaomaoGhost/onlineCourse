const mysqlPoll = require("../config/mysqlPoll");
const categoryTable = "e_category"
module.exports = {
    getCategory(cb){
        const sql = `select * from ${categoryTable}`;
        return  mysqlPoll.connect(sql,[],cb)
    }
}