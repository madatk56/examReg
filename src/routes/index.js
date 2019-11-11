const directory = require('../config/api');

const handleUsers = require('./user/index');
const handleCourses= require('./courses/index');
const handleMembers = require('./members/index');
module.exports = (app)=>{
  app.use(directory.ROOT_API.HOME,handleUsers);
  app.use(directory.ROOT_API.COURSES,handleCourses);
  app.use(directory.ROOT_API.COURSES,handleMembers);
}