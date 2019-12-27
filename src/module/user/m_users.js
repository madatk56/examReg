const jwt= require('../token/jsonwebtoken');
const userModule = require('./usersModule');

const verifyUser = async(token)=>{
  return new Promise((resolve,reject)=>{
    jwt.decode(token)
      .then(user=>{
        userModule.users.find({userName:user.userName},(err,data)=>{
          if(err){
            console.log(new Error('error to verify user '+err))
          }else{
            if(data.length>0){
              resolve({
                code:'200',
                message:'exist student',
                student:data
              })
            }else{
              resolve({
                code:'420',
                message:'don\'t exist student'
              })
            }
          }
        })
    })
      .catch(rs=>{
        resolve({
          code:'400',
          message:'user is not exist'
        })
      })
  })
}

module.exports = {
  verifyUser
}