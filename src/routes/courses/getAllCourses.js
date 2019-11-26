const handleCourse = require('../../module/courses/coursesModule');

module.exports= (req,res)=>{
  handleCourse.getAllCourses().then(data=>{
    res.json({
      code:'200',
      courses: data
    })
  })
}
