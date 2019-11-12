const mongoose =require('../../controller/connection');
const coursesSchema= mongoose.Schema({
  courseID: String,
  name: String
})
const courses = mongoose.model('courses',coursesSchema);
// create Courses
const createCourses=(list)=>{
  let check = false;
  let tmpCourses=[];
  let existCourses=[];
  return new Promise(async(resolve,reject)=>{
    for(let i=0;i<list.length;i++){
      const tmp=await courses.findOne({
        courseID: list[i].courseID
      })
      if(tmp!=null){
        check= true;
        existCourses.push(tmp);
        break;
      }else{
      courses.create(list[i],(err,result)=>{
          if(err){
            return(reject(new Error('can\'t create course '+err)))
          }else if(!result){
            check=true;
            existCourses.push(result);
            console.log(tmpCourses);
          }else{
            tmpCourses.push(result);
          }
        })
      }
    }
    if(check==false){
      return(resolve({
        code:'200',
        message:'created all courses in the list'
      }))
    }else{
      for(let i=0;i<tmpCourses.length;i++){
        console.log(tmpCourses[i])
        await courses.deleteOne(tmpCourses[i]);
      }
       resolve({
        code:'400',
        message:'can\'t create courses',
        courses: existCourses
      })
    }
  })
}
module.exports={
  createCourses
}