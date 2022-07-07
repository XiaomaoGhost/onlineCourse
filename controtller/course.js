//首页-课程
const course = require("../dao/courser");
const {host,filepath} = require("../config/serverPath");
const {sendJsonStr} = require("./sendData");
const teacher = require("../dao/teacher");
const vied = require("../dao/viedo")
const imgFolder = "/courses/"
module.exports = {
    getCourseInfo(req,res,next){
        const {type} = req.query
        course.getCourserInfo([type],(err,data)=>{
            if (err){
                next(err);
                return;
            }
            const result = data.map(item=>{
                item.image_src = host + filepath + imgFolder + item.image_src;
                item.detail_imgs = host + filepath + imgFolder + item.detail_imgs;
                return item;
            });
            const sendData = {
                msg: "ok",
                status: 200,
                result
            }
            sendJsonStr(res,JSON.stringify(sendData))
        })
    },
    coursesGroup(req,res,next){
        const {
            page=1,
            pageSize=3,
            area,
            type,
            grade,
            subject
        } = req.query;
        course.coursesGroup({
            area_name:area,
            type_name:type,
            grade_name:grade,
            subject_name:subject
        },(err,data)=>{
            if (err) {
                next(err);
                return;
            }
            const count = data.length;
            data = data.splice((page-1)*pageSize,pageSize);
            const result = data.map(item=>{
                item.image_src = host + filepath + imgFolder + item.image_src;
                return item;
            });
            const sendData = {
                msg: "ok",
                status: 200,
                result,
                page:+page,
                totalPage:Math.ceil(count / pageSize),
                totalRow:count
            }
            sendJsonStr(res,JSON.stringify(sendData))
        })
    },
    searchList(req,res,next){
        const {page=1,pageSize=6,key} = req.query;
        course.searchList([key],(err,data)=>{
            if (err){
                next(err);
                return
            }
            const count = data.length;
            data = data.splice((page-1)*pageSize,pageSize);
            const result = data.map(item=>{
                item.image_src = host + filepath + imgFolder + item.image_src;
                return item;
            });
            const sendData = {
                msg: "ok",
                status: 200,
                result,
                page:+page,
                totalPage:Math.ceil(count / pageSize),
                totalRow:count
            }
            sendJsonStr(res,JSON.stringify(sendData))
        })
    },
    async courseDetail(req,res){
        const {cid} = req.params;
        const courses = await course.findCourse([cid]);
        const videos = await vied.findVied([cid]);
        const {tid} = courses[0];
        const teaches = await teacher.findTeacher([tid]);


        const sendData = {
            msg: "查询成功",
            status: 200,
            result:{
                course:courses, // 课程
                teaches, // 老师
                videos // 视频
            }
        }
        sendJsonStr(res,sendData)

    }
}