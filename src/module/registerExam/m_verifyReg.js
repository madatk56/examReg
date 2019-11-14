const examCollections = require('../exam/examModule');

function updateSlot(examID){
  examCollections.exam.updateOne({_id:examID},{$inc:{slot:-1}},{new:true},(err,rs)=>{
    console.log(rs);
  })
}

module.exports = {
  updateSlot
} 