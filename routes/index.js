const express = require('express');
const router = express.Router();
const tutorialsRoutes = require('./turorial.routes');

router.use('/tutorials', tutorialsRoutes);
// router.use('/users', usersRoutes);

module.exports = router;
