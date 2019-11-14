const router = require('express').Router();
const directory = require('../../config/api');

const createExams = require('./createExams');
const removeExam = require('./removeExam');
const getAllExams = require('./getAllExams');

router.post(directory.EXAM.create_exams,createExams);
router.post(directory.EXAM.remove_exams,removeExam);
router.get(directory.EXAM.get_all,getAllExams);
module.exports = router;