"use strict";

const { response } = require("express");
const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body; // 가져와서
    }

    async login() {
        const client = this.body; //바디에 아이디값 
        try {
        const { id, psword } = await UserStorage.getUserInfo(client.id); // 해당하는 정보를 반환

        if (id) {
            if (id === client.id && psword === client.psword) {
                return { success: true};
            }
            return  {success: false, msg: "비밀번호가 틀렸습니다."};  
        }
        return { success: false, msg: "존재하지 않는 아이디입니다." };
        } catch (err) {
            return { success: false, msg: err };
        }
    }

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return(response); 
        }   catch (err) {
            return { success: false, msg: err }; 
        }
    }
}

module.exports = User;