// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(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);
const msg = {
  to: 'test@example.com',
  from: 'test@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);

/*
files: [
    {
      filename:     'image.jpg',          
      contentType:  'image/jpeg',
      cid:          'myimagecid',
      content:      ('yourbase64encodedimageasastringcangohere' | Buffer)
    }
  ]


*/