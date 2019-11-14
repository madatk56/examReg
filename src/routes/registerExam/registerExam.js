const register = require('../../module/registerExam/registerModule');
const mUser= require('../../module/user/m_users');
module.exports = (req,res)=>{
  const reg = {
    studentID: req.body.studentID,
    examID : req.body.examID,
    courseID :req.body.courseID,
    class : req.body.class,
    date : req.body.date,
    startTime : req.body.startTime,
    endTime : req.body.endTime
  }
  const token = req.body.token;
  
  mUser.verifyUser(token).then(rs=>{
    if(rs.code=='200'){
      register.registerExam(reg).then(result=>{
        res.json(result)
      })
    }else{
      res.json(rs)
    }
  })
}