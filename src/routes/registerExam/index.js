const router = require('express').Router();
const directory = require('../../config/api');
const register = require('./registerExam');
const handleRegister = require('./handleRegister');

router.post(directory.REGISTER.register,register);
router.get(directory.REGISTER.get_by_studentID,handleRegister.getRegisterByStudentID);
router.post(directory.REGISTER.remove,handleRegister.removeRegister);
router.get(directory.REGISTER.get_by_exam,handleRegister.getRegisterByExamID);
module.exports = router;