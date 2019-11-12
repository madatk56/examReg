const router = require('express').Router();
const directory = require('../../config/api');

const createExams = require('./createExams');
const removeExam = require('./removeExam')

router.post('/create',createExams);
router.post('/remove',removeExam);

module.exports = router;