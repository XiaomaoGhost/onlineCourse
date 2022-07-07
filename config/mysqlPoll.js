const mysql = require("mysql");
const {dbConfig} = require("./databaseSet");
const dbPoll = {
    poll:{},
    /**
     * 创建数据库连接池
     */
    create(){
        this.poll = mysql.createPool(dbConfig)
    },
    /**
     * 得到一个数据库连接对象
     */
    getDataBaseConnection(){
        const _this = this;
        return new Promise(function (resolve, reject)  {
            _this.poll.getConnection((err,connection)=>{
                if (err){
                    reject(err);
                }else {
                    resolve(connection)
                }
            })
        })
    },
    /**
     * 异步的方式调用
     * @param {string} sql 查询语句
     * @param {Array} data 数据
     * @param {function} cb 执行完sql的回调函数
     */
    async connect(sql,data,cb){
        this.poll.getConnection((err,connection)=>{
            if (err){
                console.log(err);
            }else {
                connection.query(sql, data, cb);
                connection.release();
            }
        })
    },
    /**
     * Promise方式调用
     * @param {string} sql 查询语句
     * @param {Array} data 数据
     * @return {Promise<void>}
     */
     connectAsync(sql,data=[]){
        return new Promise( async (resolve, reject) => {
            const connection = await this.getDataBaseConnection();
            await connection.query(sql, data, (err,data)=>{
                if (err){
                    reject(err)
                }else {
                    resolve(data)
                }
            })
            connection.release()
        })

    }
}
dbPoll.create();
module.exports = dbPoll
