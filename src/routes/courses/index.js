const router = require('express').Router();
const directory = require('../../config/api');

const createCourses = require('./createCourses');
const getMembersByCourseID = require('./getMembersByCourseID');

router.post(directory.COURSES.CREATE,createCourses);
router.get(directory.COURSES.get_members_by_courseID,getMembersByCourseID);
module.exports = router;