const jwt = require('./jsonwebtoken');
 
const user = {
  userName:'admin1',
  password:'admin1'
}
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiIsImlhdCI6MTU3MzQ5NzQwMn0.RXlIdTkbfuCD1Cqs3V1RBQLgi7RdrNYYcwy1wnFR5WE'
jwt.hashcode(user).then(rs=>{
  console.log(rs);
})