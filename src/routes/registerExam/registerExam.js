const register = require('../../module/registerExam/registerModule');
const mUser = require('../../module/user/m_users');
module.exports = (req, res) => {
  const reg = {
    studentID: '',
    name: '',
    class: '',
    examID: req.body.examID,
    courseID: req.body.courseID,
    courseName:req.body.courseName,
    date:req.body.date,
    startTime:req.body.startTime,
    endTime:req.body.endTime,
    room: req.body.class
  }
  const token = req.body.token;
  mUser.verifyUser(token).then(async rs => {
    if (rs.code == '200') {
      reg.studentID= await rs.student[0].studentID;
      reg.name= await rs.student[0].fullName;
      reg.class = await rs.student[0].grade;
      register.registerExam(reg).then(result => {
        res.json(result)
      })
    } else {
      res.json(rs)
    }
  })
}