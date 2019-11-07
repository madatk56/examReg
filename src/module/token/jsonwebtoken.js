const jwt = require('jsonwebtoken');
const secretKey = process.env.secretKey || 'thesecret'
const hashcode = async(user)=>{
  return(await jwt.sign(user,secretKey));
}
const decode = async(token)=>{
  return(await jwt.verify(token,secretKey));
}
module.exports={
  hashcode,
  decode
}