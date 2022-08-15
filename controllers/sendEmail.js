const nodemailer = require("nodemailer");
const Email = require("../models/emails");
const User = require("../models/user");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true,
  auth: {
    user: "misbahzahra12@gmail.com",
    pass: "tserosxdifysrlav",
  },
});

exports.sendEmail = async (req, res) => {
  const { senderEmail, recieverEmail, subject, cc, bcc } = req.body;
  try {
    if (!recieverEmail && !subject) {
      return res.json({ error: "Reciever email and subject cant be empty" });
    }
    if (!recieverEmail) {
      return res.json({ msg: "Please enter the receiver email" });
    }
    if (!subject) {
      return res.json({ error: "Subject cant be empty" });
    }
    const user = await User.findByPk(req.userId);
    if (!user) {
      return res.status(400).json({ error: "No User found" });
    }
    const sendEmail = user.createEmail({
      senderEmail,
      recieverEmail,
      subject,
      cc,
      bcc,
    });

    const from = senderEmail;

    let mailOptions = {
      from: from,
      to: recieverEmail,
      subject: subject,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message %s sent: %s", info.messageId, info.response);
      res.json({ msg: "email sent" });
    });
    res.json({ mail: sendEmail });
  } catch (error) {
    console.log(error);
  }
};
