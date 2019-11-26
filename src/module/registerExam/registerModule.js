const mongoose = require('../../controller/connection');
const mVerifyReg = require('./m_verifyReg');

const registerSchema = mongoose.Schema({
  studentID: String,
  examID: String,
  courseID: String,
  class: String,
  date: String,
  startTime: String,
  endTime: String
})

const resgister = mongoose.model('register', registerSchema);

const registerExam = (reg) => {
  return new Promise((resolve,reject)=>{
    mVerifyReg.checkBan(reg).then(rs=>{
      if(!rs){
        resgister.create(reg,(error,data)=>{
          if(error){
            reject(new Error('error to create register exam '+ error))
          }else{
            mVerifyReg.updateSlot(reg.examID)
            resolve({
              code:'200',
              data
            })
          }
        })
      }else{
        resolve({
          code:'400',
          message:'can\'t register exam cause banned'
        })
      }
    })
  })
}

const getRegisterByStudentID = (studentID)=>{
  return new Promise((resolve,reject)=>{
    resgister.find({studentID:studentID},(err,res)=>{
      if(err){
        reject( new Error('error to get all register Exams of student '+ err))
      }else{
        resolve({
          code:'200',
          data:res
        })
      }
    })
  })
}

const getRegisterByExamID = (id)=>{
  return new Promise((resolve,reject)=>{
    resgister.find({examID:id},(err,res)=>{
      if(err){
        reject( new Error('error to get all register Exams of class '+ err))
      }else{
        resolve({
          code:'200',
          data:res
        })
      }
    })
  })
}

const removeRegister = async(reg)=>{
  const result = await resgister.deleteOne({
    studentID: reg.studentID,
    examID: reg.examID
  });
  return new Promise((resolve,reject)=>{
    if(result.deletedCount==1){
      resolve({
        code:'200',
        message:'deleted',
      })
    }else{
      resolve({
        code:'400',
        message:'id is not exist, id= '+studentID,

      })
    }
  })
  
}
module.exports= {
  registerExam,
  getRegisterByStudentID,
  getRegisterByExamID,
  removeRegister
}