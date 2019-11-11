const mongoose = require('../../controller/connection');

const memberSchema = mongoose.Schema({
  courseID : String,
  courseName: String,
  list:[
    {
      studentID:String,
      fullName:String,
      class:String,
      ban:String
    }
  ]
});
const members = mongoose.model('members',memberSchema);
const getMembersbyCourseID = async(courseId)=>{
  const tmp ={
    courseID: courseId
  }
  return(await members.find(tmp));
}
const getAllCoursesOfmember = (studentID)=>{
  const tmp = {
    "list.studentID" : studentID
  }
  return new Promise(async(resolve,reject)=>{
    resolve({
      code:'200',
      data:await members.find(tmp,{list:0,_id:0,__v:0})
    })
  })
}

const createMembersOfCourses =(courseId,studentsList)=>{
  const list = {
    courseID: courseId,
    list: studentsList
  };
  return new Promise((resolve,reject)=>{
    members.create(list,(err,result)=>{
      if(err){
        return(reject(new Error('error creating members of courses ' + err)));
      }else{
        return resolve({
          code:'200',
          message:'created',
          data:result
        })
      }
    })
  })
}
module.exports={
  getMembersbyCourseID,
  getAllCoursesOfmember,
  createMembersOfCourses
}