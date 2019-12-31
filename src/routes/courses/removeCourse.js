const handleRemoveCourse = require('../../module/courses/coursesModule');
const handleRemoveExams = require('../../module/exam/examModule');
const handleRemoveRegisters = require('../../module/registerExam/registerModule');
const handleRemoveMembers = require('../../module/membersOfCourses/membersModule');
module.exports = (req,res)=>{
  const courseID = req.body.courseID;
  const result = handleRemoveCourse.removeCourses(courseID);
  
  try {
    handleRemoveExams.deleteExamByCourseID(courseID);
    handleRemoveRegisters.removeRegisterByCourseID(courseID);
    handleRemoveMembers.deleteMembersByCourseID(courseID);
  } catch (error) {
    try {
      handleRemoveRegisters.removeRegisterByCourseID(courseID);
      handleRemoveMembers.deleteMembersByCourseID(courseID);
    } catch (error) {
      try {
        handleRemoveMembers.deleteMembersByCourseID(courseID);
      } catch (error) {
        console(`${error}''`)
      }
    }
  }
  res.json(result);
}