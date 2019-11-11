const directory = require('../config/api');
const handleUsers = require('./user/index');
const handleCourses= require('./courses/index');
module.exports = (app)=>{
  app.use(directory.ROOT_API.HOME,handleUsers);
  app.use(directory.ROOT_API.COURSES,handleCourses);
}