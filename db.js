import mysql from "mysql";

export const db = mysql.createConnection({
    // host:"localhost",
    // user:"root",
    // port:3306,
    // password:"",
    // database:"reacthosting_db"
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})