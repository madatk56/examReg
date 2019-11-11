module.exports = {
    ROOT_API:{
        HOME:"/",
        COURSES:'/courses'
    },
    LOGIN:{
        SIGN_IN:"/sign-in",
        CREATE:"/create-users"
    },
    COURSES:{
        CREATE:'/create',
        get_course_of_member:'/student/:ID',
        get_members_by_courseID:'/course/:ID'
    }
    
}