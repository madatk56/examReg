const excelToJson = require('convert-excel-to-json');

const handleMembers = require('../../module/membersOfCourses/membersModule');
const coursesModule = require('../../module/courses/coursesModule');

module.exports = (req,res)=>{
  const courseID = req.body.courseID
  const file = req.files.member;
  const fileName= file.name;
  const sourceFile = process.cwd()+'/src/config/excel/'+fileName; 
  file.mv(sourceFile,err=>{
    if(err){
      console.log('error to upload file '+ err)
    }else{
      const data = excelToJson({
        sourceFile:sourceFile,
        header:{
          rows:1
        },
        columnToKey:{
          A:'studentID',
          B:'fullName',
          C:'class',
          D:'ban'
       }
      })
      //const indexString = fileName.indexOf('.xlsx');
      coursesModule.getCoursesByID(courseID).then(result=>{
        if(result.length>0){
          handleMembers.createMembersOfCourses(result[0],data.Sheet1).then(result=>{
            res.json(result);
          })
        }else{
          res.json({
            code:'400',
            message:'don\'t have the courses, courseID= '+ courseID
          })
        }
      })
    }
  })
}