const register = require('../registerExam/registerModule');

const student ={
  "studentID": '1',
  "examID" : '5dcd87a8cd2a7709042fe1d5',
  "courseID" : "1",
  "class" : "5",
  "date" : "1/12/2000",
  "startTime" : "10:00Am",
  "endTime" : "12:00Am"
}
//register.registerExam(student);
register.removeRegister(student).then(rs=>{
  console.log(rs)
});