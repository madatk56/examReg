const examModule = require('../../module/exam/examModule');
const execlToJson = require('convert-excel-to-json');
const jwt = require('../../module/token/jsonwebtoken');
module.exports =(req,res)=>{
  const file = req.files.exam;
  const token = req.body.token;
  const sourceFile = process.cwd()+'/src/config/excel/'+file.name;
  jwt.decode(token).then(data=>{
    if(data.userName=='admin'){
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
              B:'courseID',
              C:'class',
              D:'date',
              E:'startTime',
              F:'endTime',
              G:'slot'
            }
          })
          examModule.createExam(data.Sheet1).then(result=>{
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
    if(err) res.json({
      code:'420',
      message:'user is not exist!!'
    })
  }) 
}