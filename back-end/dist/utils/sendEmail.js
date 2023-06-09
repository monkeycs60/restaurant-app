import nodemailer from 'nodemailer';
import { formatDate } from './formatDate.js';
import dotenv from 'dotenv';
dotenv.config();
// const transporter = nodemailer.createTransport({
// 	service: 'hotmail',
// 	auth: {
// 		user: process.env.RESTAURANT_OWNER_EMAIL_ADDRESS,
// 		pass: process.env.RESTAURANT_OWNER_EMAIL_ADDRESS_PASSWORD,
// 	},
// });
const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
    },
});
export async function sendEmail(to, subject, bookingData) {
    if (bookingData.experience === 'pitch_black') {
        bookingData.experience = 'Pitch Black';
    }
    const mailOptions = {
        from: 'noreply@coworkezmalin.com',
        to: to,
        subject: subject,
        html: `
          <div style="text-align: center; background-color: lightgray; padding: 16px; border-radius: 10px;">
    <img src="https://i.postimg.cc/7YTk7m8y/blindfold-girl.png" alt="Logo" style="border-radius: 50%;" width="140" height="140">
    <h1 style="color: orange; font-size: 30px; text-shadow: 2px 2px #ff0000;">Restaurant Confirmation</h1>
    <p style="font-size: 18px; color: gray; font-family: Arial, sans-serif;">
        Dear Guest,<br/>
        Your booking has been confirmed for ${bookingData.guests} people on ${formatDate(bookingData.date)}. 
        You have selected the ${bookingData.experience} experience.<br/>
        Thank you for choosing our restaurant!
    </p>
    <p style="font-size: 16px; color: gray; font-family: Arial, sans-serif; font-style: italic">The Chiaroscuro team</p>
</div>
        `,
    };
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    }
    catch (error) {
        console.log(error);
    }
}
//# sourceMappingURL=sendEmail.js.map