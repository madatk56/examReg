const directory = require('../config/api');

const handleUsers = require('./user/index');
const handleCourses= require('./courses/index');
const handleMembers = require('./members/index');

const handleExams = require('./exams/index');
module.exports = (app)=>{
  app.use(directory.ROOT_API.HOME,handleUsers);
  app.use(directory.ROOT_API.COURSES,handleCourses);
  app.use(directory.ROOT_API.COURSES,handleMembers);

  app.use('/exam',handleExams);
}