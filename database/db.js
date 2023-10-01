const mysql = require("mysql2/promise");
const config = require("./config");

var connection;

const connect = async() => {
    try{
        connection = await mysql.createConnection(config.db);
        console.log(`>>> Connection to ${process.env.DB_NAME} SUCCESSFUL`);
    }catch(err){
        console.error(`>>> Error connecting to ${process.env.DB_NAME}`, err)
    }
}   

const query = async(sql,params) => {
    if(!connection)
        await connect();

    try{
        const [results] = await connection.execute(sql, params);
        return results;
    }catch(err){
        console.error(`Query ERROR -> ${sql, err.message}`)
        throw new Error(err);
    }
}

module.exports = {
    query,
}