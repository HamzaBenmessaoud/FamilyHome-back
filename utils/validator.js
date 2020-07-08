const { check } = require('express-validator');

const verificate = (step) => {

    if (step === 'connect') {
        return  [check('email', "Veuillez indiquez une adresse email valide").notEmpty().isEmail()]
    }

    if (step === 'newadmin') {
        return [
            check('email', "Veuillez indiquez une adresse email valide").notEmpty().isEmail(),
            check('username', "Veuillez indiquez votre nom d'utilisateur (Nom/Prenom), minimum 5 caractères").notEmpty().isLength({ min: 5 }),
            check('password', "Veuillez rentrer un mot de passe de 8 caractères minimum").notEmpty().isLength({ min: 8 })
        ]
    }
 
    if (step === 'create') {
        return [
            check('email', "Veuillez indiquez une adresse email valide").notEmpty().isEmail(),
            check('username', "Veuillez indiquez votre nom d'utilisateur (Nom/Prenom), minimum 5 caractères").notEmpty().isLength({ min: 5 }),
        ]
    }

};

module.exports = {
    verificate: verificate
};