// routes/bootcamp.routes.js
const { auth } = require("../middleware");
const controller = require("../controllers/bootcamp.controller");

module.exports = app => {
    app.post("/api/signup", [auth.verifySignUp.checkDuplicateEmail], controller.createBootcamp);
    
  };