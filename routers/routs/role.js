const express = require("express");
const roleRouter = express.Router();

const { createRole } = require("./../controllers/role");

roleRouter.post("/create", createRole);

module.exports = roleRouter;
