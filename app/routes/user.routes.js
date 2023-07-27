// routes/user.routes.js
const { auth } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = app => {
    app.post("/api/signup", [auth.verifySignUp.checkDuplicateEmail], controller.createUser);
    
  };