const usersModule = require('../../module/user/users');
const excelToJson = require('convert-excel-to-json');

module.exports =(req,res)=>{
  const file = req.files.users;
  const sourceFile = process.cwd()+'/src/config/excel'+file.name;
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
          B:'password'
        },
       sheets:['Sheet1']
      })
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
}