const   mailer  = require('nodemailer'),
        env         = require('../environnement'),
        xoauth2     = require('xoauth2');

const smtpTransport = mailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: env.mail.user,
        pass: env.mail.pass,
        clientId: env.mail.clientId,
        clientSecret: env.mail.clientSecret,
        refreshToken: env.mail.refreshToken,
        accessToken: env.mail.accessToken
    }
});


const mail = {
    from: "familyhome <familyhome.noreply@gmail.com>",
    to: "hua.stephane@gmail.com",
    subject: "miaww",
    html: "<h1>HELLO BABYYY xD</h1>",
    attachments: [
        {
          filePath: 'C:\Users\ING-FLUX\Documents\GitHub\FamilyHome_back\src\environnement.js'
        },
    ]
}
smtpTransport.sendMail(mail, function(error, response){
    if(error){
        console.log("Erreur lors de l'envoie du mail!");
        console.log(error);
    }else{
        console.log("Mail envoyé avec succès!")
    }
    smtpTransport.close();
});