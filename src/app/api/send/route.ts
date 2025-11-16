import {FormData} from "@/app/contact/components/ContactForm";
import {NextRequest, NextResponse} from "next/server";
const nodemailer = require('nodemailer');


export async function POST(request: NextRequest) {
    try {

        const body = await request.json();
        console.log("Received contact form data:", body);
        const {name, email, subject, message} = body as FormData;

        const smtpTransport = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.GMAIL_SENDER,
                pass: process.env.GMAIL_SENDER_PASSWORD, // Use App Password here
            },
        });

        const mailOptions = {
            from: "Lulu Web Studio",
            to: process.env.EMAIL_TO_SEND_TO,
            subject: `Lulu Web Studio Lead ${subject}`,
            replyTo: email,
            html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
    <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f3f4f6;">
        <tr>
            <td style="padding: 40px 20px;">
                <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #000000; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);">
                    <!-- Header -->
                    <tr>
                        <td style="padding: 48px 40px; text-align: center; background: linear-gradient(to bottom, #000000, #0a0a0a);">
                            <h1 style="margin: 0 0 12px 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                                Lulu Web Studio
                            </h1>
                            <p style="margin: 0; color: #9ca3af; font-size: 16px;">
                                New Contact Form Submission
                            </p>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px;">
                            <!-- Subject Badge -->
                            <div style="margin-bottom: 32px;">
                                <span style="display: inline-block; padding: 8px 16px; background-color: #1f1f1f; color: #ffffff; border-radius: 9999px; font-size: 14px; font-weight: 500;">
                                    ${subject}
                                </span>
                            </div>

                            <!-- Contact Info Cards -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
                                <tr>
                                    <td style="padding-bottom: 16px;">
                                        <div style="background-color: #1f1f1f; border-radius: 16px; padding: 24px;">
                                            <p style="margin: 0 0 8px 0; color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">
                                                Name
                                            </p>
                                            <p style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 500;">
                                                ${name}
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-bottom: 16px;">
                                        <div style="background-color: #1f1f1f; border-radius: 16px; padding: 24px;">
                                            <p style="margin: 0 0 8px 0; color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">
                                                Email
                                            </p>
                                            <p style="margin: 0;">
                                                <a href="mailto:${email}" style="color: #ffffff; font-size: 18px; font-weight: 500; text-decoration: none;">
                                                    ${email}
                                                </a>
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </table>

                            <!-- Message Section -->
                            <div style="background-color: #1f1f1f; border-radius: 16px; padding: 24px; margin-bottom: 32px;">
                                <p style="margin: 0 0 16px 0; color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">
                                    Message
                                </p>
                                <p style="margin: 0; color: #e5e7eb; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">
${message}
                                </p>
                            </div>

                            <!-- Reply Button -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="text-align: center; padding-top: 8px;">
                                        <a href="mailto:${email}" style="display: inline-block; padding: 16px 32px; background-color: #ffffff; color: #000000; text-decoration: none; border-radius: 12px; font-size: 16px; font-weight: 600; transition: all 0.3s;">
                                            Reply to ${name.split(' ')[0]}
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 32px 40px; background-color: #0a0a0a; border-top: 1px solid #1f1f1f;">
                            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px; text-align: center;">
                                This email was sent from your website's contact form
                            </p>
                            <p style="margin: 0; color: #4b5563; font-size: 12px; text-align: center;">
                                Lulu Web Studio © ${new Date().getFullYear()}
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
            `

        };
        // Send the email
        const info = await smtpTransport.sendMail(mailOptions);
        // console.log(`Email sent: ${info.messageId}`);

        return NextResponse.json({message: 'Success. Email was sent'});

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            {error: 'Could not send message. Please try again later.'},
            {status: 500}
        );
    }
}