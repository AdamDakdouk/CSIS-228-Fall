const { query } = require("../database/db");



const loadUser = async () => {
    try{
        let sql = 'select * from users';
        const users = await query(sql);
        return users;
    }catch(err){
        throw new Error(err);
    }
}

module.exports = {
    loadUser,
}