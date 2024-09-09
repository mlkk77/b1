"use strict";

const { reject } = require("async");
const db = require("../config/db");


class UserStorage {
    
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
        db.query(query, [id], (err, data) => {
            if (err) reject(`${err}`);
            resolve(data[0]);
            //console.log(data);
        });
        });
    }
    static getUserInfo2(id){
        db.query("select * from users WHERE id = ?",[id],(err,data) => {
            console.log(data);
        });
    }
    
    static async save(userInfo){
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
        db.query(
            query,
            [userInfo.id, userInfo.name, userInfo.psword],
            (err) => {
            if (err) reject(`${err}`);
            resolve({ success: true });
        });
        });
        
    }
}


module.exports = UserStorage;