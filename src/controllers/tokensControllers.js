const Tokens = require('../models/tokens')

exports.create = function(req, res) {

    const new_token = new Tokens(req.body);

    //handles null error 

        Tokens.create(new_token, function(err, new_token) {
            if (err)
            res.send(err);
            res.json({error:false,message:"token added successfully!",data:new_token});

    });
  };
