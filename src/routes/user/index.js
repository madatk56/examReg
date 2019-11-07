const router = require('express').Router();
const directory = require('../../config/api')

const handleCreateUsers = require('./createUsers');
const handleSignIn = require('./signIn');

router.post(directory.LOGIN.CREATE,handleCreateUsers);
router.post(directory.LOGIN.SIGN_IN,handleSignIn);
module.exports = router;