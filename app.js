"use strict";

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅

//app.set("views", "./src/views");
app.set("views", __dirname +"/src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//URL통해 전달되는 데이터에 한글, 공백 같은 문자가 포함될 경우 제대로 인식되지 않는 문제해결

app.use("/", home); //use -> 미들웨어 사용하게 해줌 

module.exports = app;

