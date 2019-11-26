module.exports = {
    ROOT_API:{
        HOME:"/",
        COURSES:'/courses',
        MEMBERS:'/student',
        EXAM:'/exam',
        REGISTER:'/register'
    },
    LOGIN:{
        SIGN_IN:"/sign-in",
        CREATE:"/create-users"
    },
    COURSES:{
        CREATE:'/create',
        get_members_by_courseID:'/:ID',
        get_all_courses:'/all'
    },
    MEMBERS:{
        get_course_of_member:'/:ID',
        create_members:'/create'
    },
    EXAM:{
        create_exams:'/create',
        remove_exams:'/remove',
        get_all:'/all'
    },
    REGISTER:{
        register:'/create',
        get_by_studentID:'/student/:ID',
        get_by_exam:'/exam/:ID',
        remove:'/remove'
    }
}