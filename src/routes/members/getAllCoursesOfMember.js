const directory = require('../../config/api');
const handleMembers = require('../../module/membersOfCourses/membersModule');

module.exports= (req,res)=>{
  const studentID = req.params.ID;
  handleMembers.getAllCoursesOfmember(studentID).then(result=>{
    res.json(result);
  })
}
