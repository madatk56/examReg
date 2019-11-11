const router = require('express').Router();
const directory = require('../../config/api');

const getAllCoursesOfMember= require('./getAllCoursesOfMember');
const createMemberOfCourse = require('./createMemberOfCourse');

router.post(directory.MEMBERS.create_members,createMemberOfCourse);
router.get(directory.MEMBERS.get_course_of_member,getAllCoursesOfMember);

module.exports = router;