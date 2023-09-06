module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller");
    let router = require("express").Router();

    // Create a new Tutorial
    router.post("/", tutorials.create);

    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);

    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);

    // Update a Tutorial with id
    router.put("/:id", tutorials.update);

    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);

    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);

    app.use('/api/tutorials', router);
};

const express = require('express');
const router = express.Router();
const tutorialsController = require('../controllers/tutorial.controller');

// const authUsersController = require('../controllers/authController');
// const authValidation = require('../validations/usersValidation');

// router.post('/create', authValidation.register, authUsersController.register);
// router.post('/login', authValidation.login, authUsersController.login);
// router.get('/', authUsersController.getAuthUsers);
// router.get('/:id', authUsersController.getAuthUserById);
// router.delete('/:id', authUsersController.deleteAuthUser);

router.post('/create', tutorialsController.register);

module.exports = router;