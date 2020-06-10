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
        user: 'familyhome.noreply@gmail.com',
        clientId: '947453049717-q9f3ksmcad04mssk0hev4vtoubolic8c.apps.googleusercontent.com',
        clientSecret: 'PhkfIIHfSIHKCXzAGg6cCKDP',
        refreshToken: '1//04cNJGtSSiLxBCgYIARAAGAQSNwF-L9Irlz1JqGXeRa8YKWu--r8HO4QE-xy4GHVasAKEDe1rhLrtmeMlhBp9_p4hXZT2ORlqJT8',
        accessToken: 'ya29.a0AfH6SMDjF70xJR4eEj5q0IcQBFfMBu8_-Kq7MM0VMD5Q6dSTsh4aB0DSXiwQ7eaQf7TZ0vQ4WN5G1ax2c0MCS_QxgxsTj7_uCV2l27bbzQnPfBEKbC7THR1d7kgqhwJkkOVOErnRozf25sWGPArEYOw2tr07W6Nr6sw'
  
    },
    jwt: '22Fe/r*bmgê51g568d',
    stripe: {
        private_key:    'sk_test_XdWJc7tW8fKMNxx9kYPglXLI009g54lOHF',
        public_key :    'pk_test_ZWjSlt9GzfeoV9wSrPadgbRm00kfMYm5tS'
    }
}