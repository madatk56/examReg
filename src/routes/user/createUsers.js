const usersModule = require('../../module/user/usersModule');
const excelToJson = require('convert-excel-to-json');
const jwt = require('../../module/token/jsonwebtoken');
module.exports =(req,res)=>{
  const file = req.files.users;
  const token = req.body.token;
  jwt.decode(token).then(data=>{
    if(data.userName=='admin'){
      const sourceFile = process.cwd()+'/src/config/excel/'+file.name;
      file.mv(sourceFile,(err)=>{
        if(err){
          console.log('error'+err)
        }else{
          const result = excelToJson({
            sourceFile: sourceFile,
            header:{
              rows:1
            },
            columnToKey:{
              A:'userName',
              B:'password',
              C:'fullName',
              D:'studentID',
              E:'grade'
            },
           sheets:['Sheet1']
          })
          console.log(result.Sheet1);
           usersModule.createUser(result.Sheet1).then(rs=>{
            if(rs.code =='200'){
              res.json({
                code:'200',
                message:'created users'
              })
            }else{
              res.json({
                code:'420',
                message:'can\'t create user' 
              })
            }
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