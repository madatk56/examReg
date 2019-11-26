const mongoose = require('../../controller/connection')
const bcrypt = require('bcrypt');
const saltRound = 10;
const userSchema = mongoose.Schema({
    userName: String,
    password: String,
    fullName: String,
    studentID: String,
    grade: String
})
const users = mongoose.model('user', userSchema);

const createUser = (user) => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < user.length; i++) {
            bcrypt.hash(user[i].password, saltRound, (err, crypt) => {
                user[i].password = crypt;
                users.create(user[i], (err, result) => {
                    if (err) {
                        return reject(new Error('create user is error'))
                    } else {
                        if (result) {
                            return resolve({
                                code: '200',
                                message: 'created users'
                            })
                        } else {
                            return resolve({
                                code: '400',
                                message: 'can\'t created users'
                            })
                        }
                    }
                })
            })
        }
    })
}

const signIn = async (account) => {
    let accountCheck =  await users.findOne({userName:account.userName});
    return new Promise((resolve,reject)=>{
        if(accountCheck){
            bcrypt.compare(account.password,accountCheck.password,(err,res)=>{
                if(res==true){
                    resolve({
                        code:'200',
                        message:'signed in',
                        userName:accountCheck.userName,
                        data:{
                            fullName:accountCheck.fullName,
                            studentID:accountCheck.studentID,
                            grade: accountCheck.grade
                        }
                    })
                }else{
                    resolve({
                        code:'420',
                        message:'fail to login'
                    })
                }
            })
        }else{
            resolve({
                code:'400',
                message:'usename is not exist'
            })
        }
    })
    
}
module.exports = {
    users,
    createUser,
    signIn
}