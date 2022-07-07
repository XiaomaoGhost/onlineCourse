const mysqlPool = require("../config/mysqlPoll");
module.exports = {
    /**
     * 得到区域数据
     * @param {Array} data 空，暂时不需要,
     * @param {function} cb 查询执行完的回调函数
     */
    getAreasInfo(data,cb){
        const sql = "SELECT * FROM e_area";
        mysqlPool.connect(sql,data,cb)
    }
}