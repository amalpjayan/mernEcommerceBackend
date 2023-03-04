const nodeMailer = require('nodemailer');

const sendEmail = async (options)=>{

    const transporter = nodeMailer.createTransport({
        service:process.env.SMPT_SERVICE,
        auth:{
            //This is given when there is problem to sand mail
            // host:process.env.SMPT_HOST,
            // port:process.env.SMPT_PORT,
            user:process.env.SMPT_MAIL,
            pass:process.env.SMPT_PASSWORD,
        }
    });

    const mailOptions = {
        // from:'testamal65@gmail.com',
        from:process.env.SMPT_MAIL,
        to:options.email,
        subject:options.subject,
        text:options.message,
    };

    await transporter.sendMail(mailOptions)

}

module.exports = sendEmail;