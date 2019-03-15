var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sanesassesor@gmail.com",
    pass: "sanes4ever"
  }
});

module.exports.sendMail = (req, res) => {
  var to = req.body.to,
    subject = req.body.subject,
    text = req.body.body;
  var mailOptions = {
    from: "sanesassesor@gmail.com",
    to: to,
    subject: subject,
    text: text
    // attachments :[
    //   {   // file on disk as an attachment
    //       filename: 'Indez',
    //       path: './key.json' // stream this file
    //   }
    // ]
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.send(err);
    } else {
      console.log("Email sent: " + info.response);
      // res.redirect(`/dashboard/${req.body.sub}/${req.body.year}`);
    }
  });
};
