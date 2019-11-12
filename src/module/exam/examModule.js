const mongoose = require('../../controller/connection');
const checkTime = require('./checkTime');
const examModule = mongoose.Schema({
  examID: String,
  CourseID: String,
  class: String,
  date: String,
  startTime: String,
  endTime: String,
  slot: String
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
        message:'created exams'
      })
    }else{
      return resolve({
        code:'420',
        message:'can\'t create exam'
      })
    }
  })
}

module.exports = {
  createExam
} 