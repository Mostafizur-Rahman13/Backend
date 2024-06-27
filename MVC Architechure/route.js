import express from "express";
const route = express.Router();
// import user from "./controller/user.js";
import User from "./controller/user.js";

route.get("/home", User.user)

export default route