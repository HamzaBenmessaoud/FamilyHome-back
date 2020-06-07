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
    smtp: {
        host: '',
        user: '',
        pass: '',
        port: '',
    },
    jwt: 'ZoubidaMangeUneGlace!ViveMoi*$ù1393'
}