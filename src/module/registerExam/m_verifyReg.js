const examCollections = require('../exam/examModule');
const m_member = require('../membersOfCourses/membersModule');
function updateSlot(examID){
  examCollections.exam.updateOne({_id:examID},{$inc:{slot:-1}},{new:true},(err,rs)=>{
   // console.log(rs);
  })
}
function checkBan(reg){
  return new Promise((resolve,reject)=>{
    m_member.members.findOne({courseID:reg.courseID},(err,res)=>{
      res.list.forEach(element => {
        if(reg.studentID===element.studentID){
           if(element.ban=='x'|| element.ban=='X'){
             resolve(true);
           }else{
             resolve(false);
           }
           
        }
      });
    })
  })
}

module.exports = {
  updateSlot,
  checkBan
} 