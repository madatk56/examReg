const directory = require('../../config/api');
const handleMembers = require('../../module/membersOfCourses/membersModule');

module.exports= (req,res)=>{
  const studentID = req.params.ID;
  handleMembers.getMembersbyCourseID(studentID).then(result=>{
    res.json(result);
  })
}
