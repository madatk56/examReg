const usersModule = require('../../module/user/usersModule');
const token = require('../../module/token/jsonwebtoken');
module.exports= async(req,res)=>{
  const user = {
    userName: req.body.userName,
    password: req.body.password
  }
  usersModule.signIn(user).then(async result=>{
    if(result.code=='200'){
      res.json({
        code:'200',
        message:'signed in',
        account:{
          userName: result.userName,
          data:result.data,
          token: await token.hashcode(user)
        }
      })
    }else if(result.code =='420'){
      res.json({
        code:'420',
        message:'password is not exist'
      })
    }else if(result.code=='400'){
      res.json({
        code:'402',
        message:'username is not exist'
      })
    }
  })
}