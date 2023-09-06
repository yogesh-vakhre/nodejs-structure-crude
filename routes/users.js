const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

const authUsersController = require('../controllers/authController');
const authValidation = require('../validations/usersValidation');

router.post('/create', authValidation.register, authUsersController.register);
router.post('/login', authValidation.login, authUsersController.login);
router.get('/', authUsersController.getAuthUsers);
router.get('/:id', authUsersController.getAuthUserById);
router.delete('/:id', authUsersController.deleteAuthUser);
// router.patch('/:id', authUsersController.patchAuthUser);
// router.put('/:id', authUsersController.updateAuthUser);


// get all users
// router.get('/', usersController.getAllUsers);

// get user by id
// router.get('/:id', usersController.getUserById);

// // create new user
// router.post('/', usersController.createUser);

// update user by id
// router.put('/:id', usersController.updateUserById);

// delete user by id
// router.delete('/:id', usersController.deleteUserById);

module.exports = router;
