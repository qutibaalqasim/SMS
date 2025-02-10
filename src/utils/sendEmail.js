import nodemailer from "nodemailer";


export async function sendEmail(to , subject , html){
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "qalqasim9@gmail.com",
            pass: "gcjn gfrv jnea dzvc"
        }
    });


    const info = await transporter.sendMail({
        from: '"qutiba alqasim 👻" <qalqasim9@gmail.com>',
        to,
        subject,
        html
    });
}
