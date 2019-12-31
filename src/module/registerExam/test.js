const registerModule = require('./registerModule');

const reg ={
  studentID: '1',
  name: 'dat dinh',
  class: '3',
  examID: '5dee5ff5bf1fdf3fb4d1b828',
  courseID: '2',
  courseName: 'ab',
  date: '11/12/2001',
  startTime: '10:00Am',
  endTime: '12:00Am',
  room: '3'
}
registerModule.removeRegisterByCourseID(1).then(rs=>{
  console.log(rs);
});