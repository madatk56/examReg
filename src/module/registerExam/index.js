const register = require('../registerExam/registerModule');
const m_register= require('./m_verifyReg');
const student ={
  "studentID": '2',
  "examID" : '5dcd87a8cd2a7709042fe1d5',
  "courseID" : "2",
  "class" : "5",
  "date" : "1/12/2000",
  "startTime" : "10:00Am",
  "endTime" : "12:00Am"
}
//register.registerExam(student);
m_register.checkBan(student).then(rs=>{
  console.log(rs);
});