const examModule = require('../../module/exam/examModule');
const execlToJson = require('convert-excel-to-json');
const jwt = require('../../module/token/jsonwebtoken');
module.exports =(req,res)=>{
  const file = req.files.exam;
  const token = req.body.token;
  const sourceFile = process.cwd()+'/src/config/excel/'+file.name;
  file.mv(sourceFile,err=>{
    if(err){
      console.log(new Error('error upload file '+ err));
    }else{
      const data = execlToJson({
        sourceFile:sourceFile,
        header:{
          rows:1
        },
        columnToKey:{
          A:'examID',
          B:'CourseID',
          C:'class',
          D:'date',
          E:'startTime',
          F:'endTime',
          G:'slot'
        }
      })
      res.json(data);
    }
  })
}