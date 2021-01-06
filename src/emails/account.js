const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = process.env.SENDGRID_API_KEY;
const sendgridEmailFrom = process.env.SENDGRID_EMAIL_FROM;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: sendgridEmailFrom,
    subject: 'Welcome to my NodeJS Task Manager App!',
    text: `Welcome to my NodeJS Task Manager App, ${name}. Let me kwow how you get along with it.`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: sendgridEmailFrom,
    subject: `We're sad to see you leaving`,
    text: `Dear ${name}. We are so sad to see you leaving, but it is your decission and we respect it. Please don't forget us and, if you like, come back and we'll be happy to give you again a warm welcome.`,
  });
};

module.exports = { sendWelcomeEmail, sendCancelEmail };
