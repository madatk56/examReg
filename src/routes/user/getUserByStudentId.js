const usersModule = require('../../module/user/usersModule');

module.exports = (req,res)=>{
  const studentId = req.params.studentId;
  //console.log(studentId);
  usersModule.getUserByStudentId(studentId).then(rs=>{
    res.json(rs);
  })
}