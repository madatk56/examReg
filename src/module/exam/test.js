const check = require('./checkTime');
const examModules = require('./examModule');
const data ={
  examID:'1',
  courseID:'1',
  class:'1',
  date:'12-11-2000',
  startTime:'8:00AM',
  endTime:'10:00AM',
  slot:'30'
}
const list = [
  { 
    examID:'5',
    courseID:'1',
    class:'3',
    date:'1/1/2000',
    startTime:'7:00AM',
    endTime:'7:50AM'
  }
]
examModules.deleteExam('1').then(rs=>{
  console.log(rs);
});