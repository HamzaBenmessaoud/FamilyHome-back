module.exports = {
    env: false,
    url: 'localhost',
    port: 3005,
    bdd: {
        mongo: {
            url: 'mongodb://localhost:27017/FamilyHome'
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
        clientId: '320323557266-5s2o1a79humuda6tkak26us712f9397m.apps.googleusercontent.com',
        clientSecret: 'miPHu1ZcQYU6OLVOJ1DMYq2x',
        refreshToken: '1//04V09OLyFgv9RCgYIARAAGAQSNwF-L9Ir_ALM9xevr0iKA3j-xaGoA5lLxAp58fceGz7vBVbz_4hAdjIR70s2Wr4dz08ZLT2b-SI',
        accessToken: 'ya29.a0AfH6SMBv0GZ3ndA_qCAjGp9-Smlgv532eRvd9TYNRugM148pfMCeCEoCE_Vv_PLznINgUgovYYfjUfLpj2pmGpPney_3xncmY9PSzwNMsoFZrLe_xhoNJg59lc6cxXIqowj2UAZVoj4H9c386HFIpJNFMSB-5_NZ58c'
    
    },
    jwt: '22Fe/r*bmgê51g568d',
    stripe: {
        private_key:    'sk_test_XdWJc7tW8fKMNxx9kYPglXLI009g54lOHF',
        public_key :    'pk_test_ZWjSlt9GzfeoV9wSrPadgbRm00kfMYm5tS'
    }
}