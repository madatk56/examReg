const mongoose = require('../../controller/connection');
const mVerifyReg = require('./m_verifyReg');
const mCheckTime = require('../exam/m_checkTime');
const registerSchema = mongoose.Schema({
  examID: String,
  studentID: String,
  name: String,
  class: String,
  courseID: String,
  courseName: String,
  date: String,
  startTime: String,
  endTime: String,
  room: String
})

const resgister = mongoose.model('register', registerSchema);

const registerExam = (reg) => {
  //console.log(reg);
  return new Promise((resolve, reject) => {
    mVerifyReg.checkBan(reg).then(async rs => {
      if (!rs) {
        const myExams = await getRegisterByStudentID(reg.studentID);
        if (myExams.data.length > 0) {
          await myExams.data.forEach(exam => {
            if (reg.courseID === exam.courseID) {
              return resolve({
                code: '420',
                message: 'can\'t register exam cause registered courseID'
              })
            }
          })
          const overlapStatus = await mCheckTime.checkSchudeOverlap(reg, myExams.data);
          if (overlapStatus) {
            return resolve({
              code: '421',
              message: 'can\'t register exam cause overlap'
            })
          }
        }
        resgister.create(reg, (error, data) => {
          if (error) {
            reject(new Error('error to create register exam ' + error))
          } else {
            mVerifyReg.updateSlot(reg.examID)
            resolve({
              code: '200',
              data
            })
          }
        })
      } else {
        resolve({
          code: '400',
          message: 'can\'t register exam cause banned'
        })
      }
    })
  })
}

const getRegisterByStudentID = (studentID) => {
  return new Promise((resolve, reject) => {
    resgister.find({ studentID: studentID }, (err, res) => {
      if (err) {
        reject(new Error('error to get all register Exams of student ' + err))
      } else {
        resolve({
          code: '200',
          data: res
        })
      }
    })
  })
}

const getRegisterByExamID = (id) => {
  return new Promise((resolve, reject) => {
    resgister.find({ examID: id }, (err, res) => {
      if (err) {
        reject(new Error('error to get all register Exams of class ' + err))
      } else {
        resolve({
          code: '200',
          data: res
        })
      }
    })
  })
}

const removeRegister = async (reg) => {
  const result = await resgister.deleteOne({
    _id: reg.id
  });
  return new Promise((resolve, reject) => {
    if (result.deletedCount == 1) {
      mVerifyReg.increaseSlot(reg.examID)
      resolve({
        code: '200',
        message: 'deleted',
      })
    } else {
      resolve({
        code: '400',
        message: 'id is not exist, id= ' + studentID,

      })
    }
  })

}
async function removeRegisterByExamID(examID) {
  const result = await resgister.deleteMany({ examID });
  return (result);
}
const removeRegisterByCourseID = async (courseID) => {
  const rs = await resgister.find({ courseID });
  if (rs.length > 0) {
    const result = await resgister.deleteMany({ courseID });
    if (result.deletedCount > 0) {
      return true;
    }
  }
  return false;
}
module.exports = {
  registerExam,
  getRegisterByStudentID,
  getRegisterByExamID,
  removeRegister,
  removeRegisterByCourseID,
  removeRegisterByExamID
}