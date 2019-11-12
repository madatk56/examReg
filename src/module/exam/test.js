const check = require('./checkTime');
const examModules = require('./examModule');
const data ={
  examID:'1',
  CourseID:'1',
  class:'1',
  date:'12-11-2000',
  startTime:'8:00AM',
  endTime:'10:00AM',
  slot:'30'
}
const list = [

  {
    class:'2',
  date:'12-11-2000',
  startTime:'8:00AM',
  endTime:'10:00AM'
  },
  {
    class:'1',
  date:'12-11-2000',
  startTime:'7:00AM',
  endTime:'7:50AM'
  },
  {
    class:'2',
  date:'12-11-2000',
  startTime:'11:00AM',
  endTime:'13:00AM'
  },
  {
    class:'2',
  date:'12-11-2000',
  startTime:'9:00AM',
  endTime:'11:00AM'
  }
]
examModules.createExam(list).then(rs=>{
  console.log(rs);
});