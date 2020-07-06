const   mailer  = require('nodemailer'),
        env    = require('../environnement');

const mailConfirm = (req)=>{

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
    from: "Familyhome.noreply@gmail.com <familyhome.noreply@gmail.com>",
    to: req.email,
    subject: "Validation Mail",
    html: `<head> 
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    <body>
    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
    <!-- START HEADER/BANNER -->
            <tbody><tr>
                <td align="center">
                    <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody><tr>
                            <td align="center" valign="top" background="https://i2.wp.com/julieberniercourtier.com/wp-content/uploads/2019/03/2017-Website-Header-Background-5.jpg" bgcolor="#66809b" style="background-size:cover; background-position:top;height=" 400""="">
                                <table class="col-600" width="600" height="400" border="0" align="center" cellpadding="0" cellspacing="0">
                                    <tbody><tr>
                                        <td height="40"></td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="font-family: 'Raleway', sans-serif; font-size:37px; color:#ffffff; line-height:24px; font-weight: bold; letter-spacing: 7px;">
                                            FamilyHome <span style="font-family: 'Raleway', sans-serif; font-size:37px; color:#ffffff; line-height:39px; font-weight: 300; letter-spacing: 7px;"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="font-family: 'Lato', sans-serif; font-size:15px; color:#ffffff; line-height:24px; font-weight: 300;">
                                            Nous venons d'enregistrer une inscription avec votre adresse mail <br>Afin de confirmer votre adresse veuillez cliquez sur le bouton ci-dessous.
                                        </td>
                                    </tr>    
                                    <tr>
                                        <td height="50"></td>
                                    </tr>
                                </tbody></table>
                            </td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>    
    <!-- END HEADER/BANNER -->
    <!-- START AWESOME TITLE -->
            <tr>
                <td align="center">
                    <table align="center" class="col-600" width="600" border="0" cellspacing="0" cellpadding="0">
                        <tbody><tr>
                            <td align="center" bgcolor="#2a3b4c">
                                <table class="col-600" width="600" align="center" border="0" cellspacing="0" cellpadding="0">
                                    <tbody><tr>
                                        <td height="33"></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table class="col1" width="183" border="0" align="left" cellpadding="0" cellspacing="0">
                                                <tbody><tr>
                                                <td height="18"></td>
                                                </tr>    
                                                <tr>
 
                                                </tr>
                                            </tbody></table>
                                            <table class="col3_one" width="380" border="0" align="right" cellpadding="0" cellspacing="0">
                                                <tbody><tr align="left" valign="top">
                                                    <td style="font-family: 'Raleway', sans-serif; font-size:20px; color:#f1c40f; line-height:30px; font-weight: bold;">Confirmation @Mail </td>
                                                </tr>
                                                <tr>
                                                    <td height="5"></td>
                                                </tr>    
                                                <tr align="left" valign="top">
                                                    <td style="font-family: 'Lato', sans-serif; font-size:14px; color:#fff; line-height:24px; font-weight: 300;">
                                                        Confirmez votre adresse mail et choisissez votre abonnement pour commencer votre experience!
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td height="10"></td>
                                                </tr>
                                                <tr align="left" valign="top">
                                                    <td>
                                                        <table class="button" style="border: 2px solid #fff;" bgcolor="#ffffff" width="30%" border="0" cellpadding="0" cellspacing="0">
                                                            <tbody><tr>
                                                                <td width="10"></td>
                                                                <td height="30" align="center" >
                                                                  <a  style="text-decoration:none" href="http://localhost:3005/token/`+req.token+`">Cliquez ici !</a>
                                                                </td>
                                                                <td width="10"></td>
                                                            </tr>
                                                        </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="33"></td>
                                    </tr>
                                </tbody></table>
                            </td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>    
    <!-- END AWESOME TITLE -->
    
    
    <!-- START WHAT WE DO -->
            <tr>
                <td align="center">
                    <table class="col-600" width="0" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-left:20px; margin-right:20px;">
    <tbody>
            <tr>
                <td align="center">
                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
                        <tbody><tr>
                        </tr>
                        <tr>
                            <td align="center" bgcolor="#34495e" background="https://designmodo.com/demo/emailtemplate/images/footer.jpg" height="185">
                                <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
                                    <tbody><tr>
                                        <td height="25"></td>
                                    </tr>
                                        <tr>
                                        <td align="center" style="font-family: 'Raleway',  sans-serif; font-size:26px; font-weight: 500; color:#f1c40f;">Follow us for some cool stuffs</td>
                                        </tr>
                                    <tr>
                                        <td height="25"></td>
                                    </tr>
                                    </tbody></table>
                  <table align="center" width="35%" border="0" cellspacing="0" cellpadding="0">
                                    <tbody><tr>
                                        <td align="center" width="30%" style="vertical-align: top;">
                                                <a href="https://www.facebook.com/" target="_blank"> <img src="https://designmodo.com/demo/emailtemplate/images/icon-fb.png"> </a>
                                        </td>
                                        <td align="center" class="margin" width="30%" style="vertical-align: top;">
                                             <a href="https://twitter.com" target="_blank"> <img src="https://designmodo.com/demo/emailtemplate/images/icon-twitter.png"> </a>
                                        </td>
                                        <td align="center" width="30%" style="vertical-align: top;">
                                                <a href="https://plus.google.com/" target="_blank"> <img src="https://designmodo.com/demo/emailtemplate/images/icon-googleplus.png"> </a>
                                        </td>
                                    </tr>
                                    </tbody></table>
                                </td></tr></tbody></table>
                            </td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
    
    <!-- END FOOTER -->
    
                            
                        
                    </tbody></table>
    </body>`,
    attachments: [
        {
            filename:'Calendrier_EEDSI-2019-2021.pdf',
            filePath: '‪C:/Users/ING-FLUX/Desktop/Imie/Calendrier_EEDSI-2019-2021.pdf',
            contentType: 'application/pdf'
        },
    ]
}

smtpTransport.sendMail(mail, function(error, response){
    if(error){
        console.log("Erreur lors de l'envoie du mail!");
        console.log(error);
    }else{
        console.log("-------------------Mail envoyé avec succès!-----------------------")
    }
    smtpTransport.close();
});

}

module.exports = {
    mailConfirm : mailConfirm
}