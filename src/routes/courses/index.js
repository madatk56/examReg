const router = require('express').Router();
const directory = require('../../config/api');

const createCourses = require('./createCourses');
const getMembersByCourseID = require('./getMembersByCourseID');
const getAllCourses = require('./getAllCourses');
const removeCourse = require('./removeCourse');
router.get(directory.COURSES.get_all_courses,getAllCourses);
router.post(directory.COURSES.CREATE,createCourses);
router.get(directory.COURSES.get_members_by_courseID,getMembersByCourseID);
router.post(directory.COURSES.REMOVE,removeCourse);
module.exports = router;