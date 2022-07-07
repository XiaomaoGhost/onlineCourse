const mysqlPoll = require("../config/mysqlPoll")
const table = "e_course";

/**
 * 拼接where查询字符串
 * @param whereObj 传入的是一个查询字段对象
 * 只有当值不为空的时候才会将其拼接到查询where上，对于值为空的则忽略掉
 * return 返回拼接完成的where查询字句，包括where
 */
function joinWhereContent(whereObj){
    let whereStr = " where ";
    let queryArr = [];
    const keys = Object.keys(whereObj);
    keys.forEach(item=>{
        // 如果对应的值不为空则将其加入到数组中
        if (whereObj[item]){
            queryArr.push(item + "= '" + whereObj[item] + "'")
        }
    })
    if (!queryArr.length){
        return "";
    }
    whereStr += queryArr.join(" and ")
    return whereStr;
}
module.exports = {
    findCourse(data){
      const sql = `select * from ${table} where cid = ?`;
      return  mysqlPoll.connectAsync(sql, data)
    },
    /**
     * 得到所有课程信息
     * @param data
     * @param cb
     */
    getCourserInfo(data=[],cb){
        const  size = data[0] === 1 ?8:6;
        const sql = `SELECT id,cid,title,price,area_name,subject_name,type_name,type,image_src
         FROM ${table} 
         WHERE type = ? 
         ORDER BY id DESC 
         limit 0,${size}`;
        mysqlPoll.connect(sql,data,cb)
    },
    /**
     * 得到一组课程信息
     * @param data
     * @param cb
     */
    coursesGroup(data,cb){
        let where = joinWhereContent(data)
        console.log(where)
        const sql = `select id,cid,title,price,area_name,subject_name,type_name,image_src from ${table} 
        ${where} order by id DESC`;
        mysqlPoll.connect(sql,data,cb)
    },
    /**
     * 课程搜索
     */
    searchList(data,cb){
        const sql = `select * from ${table} where title like '%${data[0]}%'`;
        mysqlPoll.connect(sql,data,cb);
    }
}