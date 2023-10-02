const { loadUser } = require("../Services/user.services")

const getAllUsersController = async (req,res) => {
    try{
        const users = await loadUser();
        res.satus(200).json({users});
    }catch(err){
        res.status(500).json({ message: "Internal Error Occured. "});
    }
}

module.exports = {
    getAllUsersController,
}