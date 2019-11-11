const router = require('express').Router();
const directory = require('../../config/api');
const createCourses = require('./createCourses');


router.post(directory.COURSES.CREATE,createCourses);

module.exports = router;