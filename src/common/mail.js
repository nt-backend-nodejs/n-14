import { createTransport } from "nodemailer";

const transporter = createTransport({
	service: "gmail",
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: "khkhamidullo@gmail.com",
		pass: "mgxp jczf bkmt whfh",
	},
});

function sendMail(userMail) {
	try {
		const mailOptions = {
			from: "khkhamidullo@gmail.com",
			to: userMail,
			subject: "Sending Email With Nodemailer",
			text: "Assalomu alaykum  Yurtim senga she'r bittim bugun qiyosong!",
			name: "Khamidullo",
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log(error);
			} else {
				console.log("Mail Sent!");
			}
		});
	} catch (error) {
		console.log("ERROR:", error);
	}
}

sendMail("lustrum062@gmail.com");
sendMail("aliataev9979@gmail.com");
sendMail("abdulhaqsherqoziyev@gmail.com");

// export default transporter;
