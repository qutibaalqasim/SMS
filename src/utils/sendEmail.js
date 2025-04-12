import nodemailer from "nodemailer";


export async function sendEmail(to , subject , html){
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.sender_Email,
            pass: process.env.sender_Password
        }
    });


    const info = await transporter.sendMail({
        from: '"qutiba alqasim 👻" <qalqasim9@gmail.com>',
        to,
        subject,
        html
    });
}
