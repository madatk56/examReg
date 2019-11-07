const usersModule = require('../../module/user/users');

module.exports =(req,res)=>{
  const user = req.body.users;
  console.log(user);
  usersModule.createUser(user).then(rs=>{
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