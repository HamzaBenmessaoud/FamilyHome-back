module.exports = {
    env: false,
    url: 'localhost',
    port: 3005,
    bdd: {
        mongo: {
            url: 'mongodb://localhost/test'
        },
        mysql:{
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'familyhome'
        }
    },
    mail: {
        user: "fhome.noreply@gmail.com",
        pass: "622332233abc",
        clientId: '947453049717-q9f3ksmcad04mssk0hev4vtoubolic8c.apps.googleusercontent.com',
        clientSecret: 'PhkfIIHfSIHKCXzAGg6cCKDP',
        refreshToken: '1//04JjAKcsJ_z9PCgYIARAAGAQSNwF-L9Irik62S3PkQ3aWHd2Wx41LCHbfGiZgdIv0IDHBfIzN2kvELRgIf0R5toxm40jSEzpH0hE',
        accessToken: 'ya29.a0AfH6SMAHOaUHlnMXCdIue_TJpgHXRIEUur36BrAFz95_jcthf-ODlOCkqiYU9jzkZOeYdL65q6WXvIm4NXZk2emb29cnnHputdrYRCjuoWvzAsffGMLF2x4ScCRNfWtdlX23EGfIEsW_DwUaIE8GSIrZAa9TwNQv3P8'
    
    },
    jwt: '22Fe/r*bmgê51g568d',
    stripe: {
        private_key:    'sk_test_XdWJc7tW8fKMNxx9kYPglXLI009g54lOHF',
        public_key :    'pk_test_ZWjSlt9GzfeoV9wSrPadgbRm00kfMYm5tS'
    }
}