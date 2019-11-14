const handleExam = require('../../module/exam/examModule');

module.exports=(req,res)=>{
  handleExam.getAllExams().then(result=>{
    res.json(result);
  })
}
