const register = require('../../module/registerExam/registerModule');
const mUser= require('../../module/user/m_users');

const getRegisterByStudentID = (req,res)=>{
  const id = req.params.ID;
  register.getRegisterByStudentID(id).then(rs=>{
    res.json({
      code:'200',
      exam:rs
    });
  }).catch(err=>{
    res.json({
      code:'400',
      message:err
    });
  })
}

const getRegisterByExamID = (req,res)=>{
  const id = req.params.ID;
  register.getRegisterByExamID(id).then(rs=>{
    res.json({
      code:'200',
      register:rs
    })
  })
}
const removeRegister = (req,res)=>{
  const reg = {
    studentID: req.body.studentID,
    examID : req.body.examID
  }
  const token = req.body.token;
  mUser.verifyUser(token).then(rs=>{
    if(rs.code=='200'){
      register.removeRegister(reg).then(result=>{
        res.json(result)
      })
    }else{
      res.json(rs)
    }
  })
}
module.exports = {
  getRegisterByStudentID,
  removeRegister,
  getRegisterByExamID
}