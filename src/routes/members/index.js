const router = require('express').Router();
const directory = require('../../config/api');

const getAllCoursesOfMember= require('./getAllCoursesOfMember');

router.get(directory.COURSES.get_course_of_member,getAllCoursesOfMember);

module.exports = router;