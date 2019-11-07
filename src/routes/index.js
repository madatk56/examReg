const directory = require('../config/api')
const handleUsers = require('./user/index')
module.exports = (app)=>{
  app.use(directory.ROOT_API.HOME,handleUsers)
}