let express = require('express');
let router = express.Router();
const banner = require("../controtller/banner")
const courser = require("../controtller/course");
const areas = require("../controtller/areas");
const subject = require("../controtller/subject")
const category = require("../controtller/category")
/*================轮播图========================*/
router.get('/banners', banner.getBannerInfo);
/*================课程列表(同步课程/精品课程)=======*/
router.get("/courseinfo",courser.getCourseInfo);
/*================获取地区===================*/
router.get("/areas",areas.getAreasInfo);
/*================获取学科=========================*/
router.get("/getsubject",subject.getSubject);
/*================获取级别======================*/
router.get("/getcategory",category.getCategory)
/*================获取一组课程=================*/
router.get("/courses",courser.coursesGroup);
/*=================课程搜索==================*/
router.get("/searchlist",courser.searchList);
/*==============获取课程详细====================*/
router.get("/course/:cid",courser.courseDetail)
module.exports = router;
