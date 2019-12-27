const userModule = require('../../module/user/usersModule');
const jwt = require('../../module/token/jsonwebtoken');

module.exports =(req,res)=>{
  const id = req.body.id;
  const token = req.body.token;
  jwt.decode(token).then(data=>{
    if(data.userName=='admin'){
      userModule.removeUser(id).then(rs=>{
        res.json(rs);
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