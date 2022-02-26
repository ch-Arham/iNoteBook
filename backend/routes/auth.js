const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require('../middleware/fetchuser');
// const testObj = require('../controller/auth'); put the funciton in controller

const JWT_SECRET = "thisIsASecre$t";

//Route 1: Create a user using: POST /api/auth/createuser.no login required
router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name", "Enter a Valid Name").isLength({ min: 3 }), //body(type,msg)
    body("password", "Password must be 5 character long").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success=false;
    //if there are errors, send bad request with error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }

    try {
      //check whether a user with this email already exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.json({ success, error: "Enter a Unique Email" });
      }

      //password hashing
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      //create a new user. await returns the resolved promise in this case the document created
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      //pass this data in JWT data part
      const data = {
        user: {
          id: user.id,
        },
      };

      //create and sign token
      const authToken = jwt.sign(data, JWT_SECRET); //returns the JWT string (3 parts.2nd data.3rd signature)

      //res.json(user) do not send the user back;
      //send the token back
      success=true;
      res.json({ success,authToken });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Internal Server Error");
    }

    //   .then(user => res.json(user))
    //   .catch(err=>{
    //       console.log(err);
    //       return res.json({error: 'Enter a Unique Email', message: err.message});
    //   });
  }
);

//Route 2:Authenticate a user using: POST 'api/auth/login'. No login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    //if there are errors, send bad request with error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //email and pass from login end point entered
    const {email,password} = req.body; 
    try {
      //To check email exists
      let user = await User.findOne({ email });
      let success;
      if (!user) {
        success = false
        return res.status(400).json({ error: "Login with correct credentials" });
      }
      //verify password
      const passwordCompare = await bcrypt.compare(password, user.password); // return boolean
      if(!passwordCompare){
        success = false;
        return res.status(400).json({ success, error: "Login with correct credentials" });
      }
      //this is what to send user back if all is good in token
      const data = {
        user: {
          id: user.id,
        },
      };

      //same as route1
      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authToken });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//Route 3:Get logged in user details using: POST 'api/auth/getuser'.login required
router.post('/getuser', fetchuser, async (req,res)=>{
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password"); //select all field except password
    res.send(user);
  } catch (err) {
      console.log(err.message);
      res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

//User is the constructor of the schema. we pass json into the model.
//to save the document in the collection named mongoose.model('User', UserSchema); User
// const user = new User(req.body);
// user.save()
// .then(item=>console.log(`${item} is sent`))
// .catch(()=>console.log("Nothing is sent"));

//4 npm install express-validator --> validation data on backend
//5 npm install bcryptjs --> password hashing
//6 npm install jsonwebtoken --> secure communication between client and sever (signature involved)
