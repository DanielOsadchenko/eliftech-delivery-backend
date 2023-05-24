const express = require("express");

const router = express.Router();

const { ctrlWrapper, validation } = require("../middlewares");
const { joiSchema } = require("../models");
const { orders: ctrl } = require("../controllers");

router.post("/", validation(joiSchema), ctrlWrapper(ctrl.addOrder));

module.exports = router;
