const nodemailer = require("nodemailer");

// module.exports.sendMail = 
async function sendMail(data) {
    try{
        var transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'vernie27@ethereal.email',
                pass: 'GgdeJPahbpJAZZ2XxT'
            }
          });
          
          var mailOptions = {
            from: 'krishnareddy4377@gmail.com',
            to: 'krishnareddy4377@gmail.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        });
    }catch(error){
        console.log("error.............:", error)
    }
}

sendMail("data")