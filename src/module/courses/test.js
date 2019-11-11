const test = require('./coursesModule');

test.getCoursesByID('2').then(rs=>{
  console.log(rs);
})