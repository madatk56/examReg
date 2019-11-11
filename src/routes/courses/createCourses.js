const handleCourses = require('../../module/courses/coursesModule');
const excelToJson= require('convert-excel-to-json');
const jwt = require('../../module/token/jsonwebtoken')
module.exports= (req,res)=>{
  const file = req.files.course;
  const token = req.body.token;
  jwt.decode(token).then(data=>{
    if(data.userName=='admin'){
      const sourceFile = process.cwd()+'/src/config/excel/'+file.name;
      file.mv(sourceFile,(err)=>{
        if(err){
          console.log('error to import excel file '+err);
        }else{
          const courses = excelToJson({
            sourceFile:sourceFile,
            header:{
              rows:1
            },
            columnToKey:{
              A:'courseID',
              B:'name'
            } 
          })
          handleCourses.createCourses(courses.Sheet1).then(result=>{
            res.json(result);
         }) 
        }
      })
    }else{
      res.json({
        code:'444',
        message:'user is not admin'
      })
    }
  }).catch(err=>{
    res.json({
      code:'420',
      message:'user is not exist'
    })
  })
}