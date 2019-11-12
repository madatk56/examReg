const handleExam = require('../../module/exam/examModule');
const jwt = require('../../module/token/jsonwebtoken');

module.exports =(req,res)=>{
  const examID = req.body.examID;
  const token = req.body.token;
  jwt.decode(token).then(data=>{
    if(data.userName=='admin'){
      handleExam.deleteExam(examID).then(rs=>{
        res.json(rs);
      })
    }else{
      res.json({
        code:'444',
        message:'user is not admin'
      })
    }
  }).catch(err=>{
    if(err) res.json({
      code:'420',
      message:'user is not exist!!'
    })
  }) 
}