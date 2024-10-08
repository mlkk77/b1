"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.blog);
router.get("/about", ctrl.output.about);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/blog", ctrl.output.blog);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);


module.exports = router; //모듈화하여 다른곳에서 사용가능하게