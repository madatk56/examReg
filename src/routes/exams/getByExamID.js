const examModule = require('../../module/exam/examModule');

module.exports = (req,res)=>{
  const courseID = req.params.courseID;
  examModule.getExamsByCourseID(courseID).then(rs=>{
    res.json(rs);
  })
}