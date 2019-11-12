const router = require('express').Router();
const directory = require('../../config/api');

const createExams = require('./createExams');

router.post('/create',createExams);

module.exports = router;