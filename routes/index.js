//require express
const express = require('express');

const router  = express.Router();
const homeController = require("../controllers/home_controller")
 

// import { home } from "../controllers/home_controller";

//check if it is working

console.log('router is working')

//using homeController to display on home router "(/)"

router.get("/", homeController.home);



//use module.export so that it can be used by index.js (server)

module.exports = router;