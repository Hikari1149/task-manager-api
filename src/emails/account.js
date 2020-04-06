const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "hikari94854@gmail.com",
      subject: "Thans for joining in",
      text: `Welcome to the app, ${name}. Let me know you get alone with the app`
    })
    .then(res => {
      console.log({ res });
    })
    .catch(e => {
      console.log({ e });
    });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "hikari94854@gmail.com",
    subject: "Sorry to see you go.",
    text: `Goodbye, ${name}, I hope to see you back sometime soon.`
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
};
