const User = require("../models/user");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true,
  auth: {
    user: "misbahzahra12@gmail.com",
    pass: "tserosxdifysrlav",
  },
});

exports.signup = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // if user already exists
    const existsUser = await User.findOne({ where: { email: email } });

    if (existsUser) {
      return res.json({ message: "A user with that email already exists!" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPw = await bcrypt.hash(password, salt);
    const user = new User({
      email: email,
      password: hashedPw,
    });
    const savedUser = await user.save().catch((error) => {
      console.log(error);
      if (password.length < 7 || password.length === "") {
        res.json({
          error: "Cant register, password must be 7 characters long",
        });
      }
    });

    if (savedUser) {
      res.json({ msg: "Thanks for registering" });
    }
  } catch (error) {
    let isEmail = email.includes("@");
    if (!isEmail) {
      res.json({ error: "Email is not valid" });
    }
  }
};

// exports.login = async (req, res, next) => {
//   const { email, password } = req.body;

//   const userExists = await User.findOne({ email: email }).catch((error) => {
//     console.log(error);
//   });

//   if (!userExists) {
//     return res.json({ message: `User with that email doesn't exist` });
//   }

//   if (userExists) {
//     if (userExists != null) {
//       const isMatch = await bcrypt.compare(password, userExists.password);
//       console.log(isMatch);
//       console.log(password, userExists.password);
//       if (userExists.email === email && isMatch) {
//         // Generate JWT Token
//         const token = jwt.sign({ userID: userExists.id }, "myJWTSecret", {
//           expiresIn: "1d",
//         });
//         res.send({
//           status: "success",
//           message: "Login Success",
//           token: token,
//         });
//       } else {
//         res.send({
//           status: "failed",
//           message: "Email or Password is not Valid",
//         });
//       }
//     } else {
//       res.send({
//         status: "failed",
//         message: "You are not a Registered User",
//       });
//     }
//   }
// };

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email && !password) {
      res.json({ error: "Email or Password cannot be empty" });
    }
    const user = await User.findOne({ where: { email: email } });
    if (user) {
      const password_valid = await bcrypt.compare(password, user.password);
      console.log(password_valid);

      if (password_valid) {
        token = jwt.sign(
          { id: user.id, email: user.email },
          "pd_JWTSecret_123",
          {
            expiresIn: "2d",
          }
        );
        res.status(200).json({ msg: "login Successful", token: token });
      } else {
        res.status(400).json({ error: "Password Incorrect" });
      }
    } else {
      res.status(404).json({ error: "User does not exist" });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.forgotPassword = async (req, res, next) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
    }
    const token = buffer.toString("hex");
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          return req.json({ msg: "No account with that email found." });
        }
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 3600000;
        return user.save();
      })
      .then(() => {
        res.json({ msg: "email sent" });
        transporter.sendMail({
          to: req.body.email,
          from: "noreply@aaron.com",
          subject: "Password reset",
          html: `
            <p>You requested a password reset</p>
            <p>Click this <a href="http://localhost:3000/reset/${token}">link</a> to set a new password.</p>
          `,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

exports.resetPassword = (req, res, next) => {
  const newPassword = req.body.password;
  const userId = req.body.userId;
  const passwordToken = req.body.passwordToken;
  let resetUser;

  User.findOne({
    resetToken: passwordToken,
    resetTokenExpiration: { $gt: Date.now() },
    id: userId,
  })
    .then((user) => {
      resetUser = user;
      return bcrypt.hash(newPassword, 12);
    })
    .then((hashedPassword) => {
      resetUser.password = hashedPassword;
      resetUser.resetToken = undefined;
      resetUser.resetTokenExpiration = undefined;
      return resetUser.save();
    })
    .then((result) => {
      res.json({ msg: "Password changed successfully!" });
    })
    .catch((err) => {
      console.log(err);
    });
};
