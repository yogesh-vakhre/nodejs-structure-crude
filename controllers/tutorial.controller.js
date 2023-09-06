const tutorialService = require('../services/tutorial.service');
const register = async (req, res, next) => {
    try {
        const { title, description, published } = req.body;
        const tutorial = await tutorialService.register(title, description, published);
        res.status(201).json({ tutorial });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    register,
};