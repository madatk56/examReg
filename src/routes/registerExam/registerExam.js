const register = require('../../module/registerExam/registerModule');
const mUser= require('../../module/user/m_users');
module.exports = (req,res)=>{
  const reg = {
    studentID: req.body.studentID,
    name: req.body.name,
    class:req.body.class,
    examID : req.body.examID,
    courseID :req.body.courseID
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