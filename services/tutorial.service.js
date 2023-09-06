const db = require("../models/index");
const Tutorial = db.tutorials;
const statusConst = require("../common/statusConstants");

const register = async (title, description, published) => {
    let responseData = statusConst.error;
    const tutorials = await Tutorial.create({
        title, description, published
    });
    responseData = {
        status: 200,
        message: "user create successfully",
        success: true,
    };

    return responseData;
};

module.exports = {
    //   login,
    register,
    //   getAuthUsers,
    //   getAuthUserById,
    //   deleteAuthUser,
    //   updateAuthUser,
    //   patchAuthUser,
};