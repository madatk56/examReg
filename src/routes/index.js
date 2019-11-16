const directory = require('../config/api');

const handleUsers = require('./user/index');
const handleCourses= require('./courses/index');
const handleMembers = require('./members/index');
const handleRegister = require('./registerExam/index');
const handleExams = require('./exams/index');
module.exports = (app)=>{
  app.use(directory.ROOT_API.HOME,handleUsers);
  app.use(directory.ROOT_API.COURSES,handleCourses);
  app.use(directory.ROOT_API.MEMBERS,handleMembers);
  app.use(directory.ROOT_API.EXAM,handleExams);
  app.use(directory.ROOT_API.REGISTER,handleRegister);
}