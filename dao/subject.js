const mysqlPoll = require("../config/mysqlPoll");
const subjectTable = "e_subject";
const subjectTypeTable = "e_type";
module.exports = {
    /**
     * 得到学科
     */
    getSubject(){
        const sql = `select * from ${subjectTable}`;
        return  mysqlPoll.connectAsync(sql)
    },
    /**
     *得到学科类别
     */
    getSubjectType(){
        const sql = `select * from ${subjectTypeTable}`;
        return  mysqlPoll.connectAsync(sql)
    }
}