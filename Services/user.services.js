const { query } = require("../database/db");
const moment = require("moment");


const loadUser = async () => {
    try{
        let sql = 'SELECT * FROM users';
        const users = await query(sql);
        return users;
    }catch(err){
        throw new Error(err);
    }
}

const loadUserById = async (id) => {
    let sql = 'select * from users WHERE user_id = ?';
        const users = await query(sql, [id]);
        return users;
}

const insertUser = async(user) => {
    let sql = `INSERT INTO users (user_first_name, user_last_name, user_email, user_password, user_dob  )
    VALUES (?, ?, ?, ?, ?)`;

    const response = await query(sql, [user?.user_first_name, user?.user_last_name, user?.user_email,
                                 user?.user_password, moment(user?.user_dob).format("YYYY-MM-DD")]);

    var user = await query("SELECT * FROM users WHERE user_id = ?", [response?.insertId]);

    user[0].user_dob =  moment(user[0].user_dob).format("YYYY-MM-DD");

    return user;
}

const updateUser = async(user) => {
    let sql = "UPDATE users SET user_first_name = ?, user_last_name = ? WHERE user_id = ?";
    const response = await query(sql, [user?.user_first_name, user?.user_lastname, user?.user_id]);

    var user = await query("SELECT * FROM users WHERE user_id = ?", [response?.insertId]);

    return user; 
}

const deleteUser = async(id) => {
   
        let sql = `DELETE FROM users WHERE user_id = ?`;
        const response = query(sql, [id]);
        return response;
    
}

module.exports = {
    loadUser,
    insertUser,
    updateUser,
    deleteUser,
    loadUserById,
}