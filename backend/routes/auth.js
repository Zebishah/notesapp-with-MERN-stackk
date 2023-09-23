const express = require("express");
const User = require("../models/user");
const router = express.Router();
const { query, validationResult, body } = require("express-validator");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchUser=require("../middlewares/fetchuser")
let jwt_secret = "your-Brother-Zebi";
router.post(
      "/signUp",
      [
            body("name", "Please enter a valid name").isLength({ max: 9 }),
            body("Email", "Please enter a valid Email").isEmail(),
            body("Password", "Password must be less than 6 chracters").isLength({
                  max: 6,
            }),
      ],

      async (req, res) => {
            const result = validationResult(req);

            if (!result.isEmpty()) {
                  res.status(400).json({ errors: result.array() });
            } else {
                  try {
                        let user = await User.findOne({ Email: req.body.Email });
                        if (user) {
                              console.log("a gye andar");

                              res.status(400).send({ error: "User with that email already exsist..." });

                        }

                        var salt = bcrypt.genSaltSync(10);
                        var password = bcrypt.hashSync(req.body.Password, salt);
                        user = await User.create({
                              name: req.body.name,
                              Email: req.body.Email,
                              Password: password,
                        });
                        const data = {
                              users: {
                                    id: user.id,
                              },
                        };
                        var auth_token = jwt.sign(data, jwt_secret);
                        res.json(auth_token);
                  } catch (error) {
                        console.log("Here is error occured in adding data" + error);

                        res.status(500).send("Code have some issues in inserting data part.....");

                  }
            }
      }
);
router.post(
      "/signIn",
      [

            body("Email", "Please enter a valid Email").isEmail(),
            body("Password", "Password must not be blank").exists(),
      ],

      async (req, res) => {
            const result = validationResult(req);

            if (!result.isEmpty()) {
                  res.status(400).json({ errors: result.array() });
            } else {
                  try {
                        let { Email, Password } = req.body;
                        let user = await User.findOne({Email:Email});
                        if (!user) {


                              res.status(400).send({ error: "Please Enter a Valid Email..." });

                        }

                        var comparePassword = await bcrypt.compare(Password, user.Password);
                        if (!comparePassword) {
                              res.status(400).send({ error: "Please Enter a Password..." });
                        }
                        const data = {
                              users: {
                                    id: user.id,
                              },
                        };
                        var auth_token = jwt.sign(data, jwt_secret);
                        res.json({"your login token": auth_token });
                  } catch (error) {
                        console.log("Here is error occured in signing_In" + error);

                        res.status(500).send("Code have some issues in Sign-In part.....");

                  }
            }
      }
);


router.get(
      "/fetchUser",

      async (req, res) => {

            try{
                  
 
console.log("hye")
   let user=await User.find();
   res.send(user);

      } catch (error) {
            console.log("Here is error occured in fetching user" + error);

            res.status(500).send("Code have some issues in fetching user part.....");

      }
      }
);
module.exports = router;
