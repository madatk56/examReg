const router = require('express').Router();
const directory = require('../../config/api')

const handleCreateUsers = require('./createUsers');
const handleSignIn = require('./signIn');
const getAllUsers = require('./getAllUser');
const removeUser =require('./removeUser');
router.post(directory.LOGIN.REMOVE_USER,removeUser);
router.post(directory.LOGIN.CREATE,handleCreateUsers);
router.post(directory.LOGIN.SIGN_IN,handleSignIn);
router.get(directory.LOGIN.GET_ALL_USERS,getAllUsers);
module.exports = router;