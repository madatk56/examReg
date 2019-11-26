const mongoose = require('../../controller/connection');
const checkTime = require('./m_checkTime');
const examModule = mongoose.Schema({
  courseID: String,
  class: String,
  date: String,
  startTime: String,
  endTime: String,
  slot: Number
})
const exam = mongoose.model('exam',examModule);

//check danh sach thi can tao co bi trung lich voi danh sach thi da co khong
const checkExam = async(list)=>{
  const existExams = await exam.find();
  return new Promise((resovle,reject)=>{
    if(existExams.length>0){
      for(let i=0;i<list.length;i++){
        if(checkTime.checkOverlap(list[i],existExams)){
          return resovle({
            code:'400',
            message:'exam is exist'
          })
        }
      }
      return resovle({
        code:'200',
        message:'ok'
      })
    }else{
      return resovle({
        code:'200',
        message:'ok'
      })
    }
  })  
}
// create exam 
const createExam = async(list) => {
  const check =  await checkExam(list);
  return new Promise((resolve,reject)=>{
    if(check.code=='200'){
      for(let i=0;i<list.length;i++){
        list[i].slot= parseInt(list[i].slot);
        exam.create(list[i],(err,data)=>{
          if(err) return reject(new Error('has err when create exam '+ err))
          if(!data){
            return resolve({
              code:'420',
              message:'can\'t create exam'
            })
          }
        })
      }
      return resolve({
        code:'200',
        message:'created exams',
        exams:list
      })
    }else{
      return resolve({
        code:'420',
        message:'can\'t create exam'
      })
    }
  })
}
// get all exam information
const getAllExams = ()=>{
  return new Promise(async(resolve,reject)=>{
    const data = await exam.find({},{__v:0});
    if(data.length>0){
      resolve({
        code:'200',
        message:'ok',
        exams: data
      })
    }else{
      resolve({
        code:'400',
        message:'empty!!!' 
      })
    }
  })
}
// delete one exam 
const deleteExam = async(examID)=>{
  const result = await exam.remove({examID:examID});
  return new Promise((resolve,reject)=>{
    if(result.deletedCount==1){
      resolve({
        code:'200',
        message:'deleted',
        exam: examID
      })
    }else{
      resolve({
        code:'400',
        message:'id is not exist, id= '+examID,

      })
    }
  })
  
}
module.exports = {
  exam,
  createExam,
  getAllExams,
  deleteExam
} 