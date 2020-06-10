const   mailer  = require('nodemailer'),
        env         = require('../environnement'),
        xoauth2     = require('xoauth2');

const smtpTransport2 = mailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: "familyhome.noreply@gmail.com",
        pass: "622332233abc",
        clientId: '947453049717-q9f3ksmcad04mssk0hev4vtoubolic8c.apps.googleusercontent.com',
        clientSecret: 'PhkfIIHfSIHKCXzAGg6cCKDP',
        refreshToken: '1//04eEWn6g79ow1CgYIARAAGAQSNwF-L9Ir5f5tpEs1iUjpGfC9PDmLvOg9-eHIBrV0onJNOjc1fGDZbN3G8mn4EwZkJQVkHBB8_lU',
        accessToken: 'ya29.a0AfH6SMDjF70xJR4eEj5q0IcQBFfMBu8_-Kq7MM0VMD5Q6dSTsh4aB0DSXiwQ7eaQf7TZ0vQ4WN5G1ax2c0MCS_QxgxsTj7_uCV2l27bbzQnPfBEKbC7THR1d7kgqhwJkkOVOErnRozf25sWGPArEYOw2tr07W6Nr6sw'
    }
});


var auth = {
    user: "familyhome.noreply@gmail.com",
    clientId: '947453049717-q9f3ksmcad04mssk0hev4vtoubolic8c.apps.googleusercontent.com',
    clientSecret: 'PhkfIIHfSIHKCXzAGg6cCKDP',
    refreshToken: '1//04O-PD-RR553ZCgYIARAAGAQSNwF-L9Ir_4Wxmk3RMcARxVghOv1UaCFfd4-1haKwZAsvkZ3-yzB4wUdkKZMBSyRHDpj3J4iXZeU', // newone
    accessToken:'ya29.a0AfH6SMCAVx5nO7Gy_P7bUXV3dmLHqF4SsQ-snpWUZ8S9T0O2BiKDHp9Xb4kRxZNAvMX4UXHaso4U8T0KlVbt-4tN8SDeOviNhWAlkA4UDvQvtkUtsjsSA4wwaAG1TVKJyoAUGzO1pkkKqMVIRcMb-r6gTOAtBBH4lRk'
};

const smtpTransport = mailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator(auth)},
});

const mail = {
    from: "familyhome <familyhome.noreply@gmail.com>",
    to: "emmerick.miatti@gmail.com",
    subject: "leSujetDuMail",
    html: "test",
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