const usersModule = require('../../module/user/usersModule');
module.exports = (req,res)=>{
  usersModule.getAllUser().then(rs=>{
    res.json({accounts:rs});
  })
}