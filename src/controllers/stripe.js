
const   env = require('../environnement'),
        stripe = require('stripe')(env.stripe.private_key);

stripe.subscriptions.create(
    {
        customer: '',
        items: [
        {price: ''},
        ],
    },
    function(err, subscription) {
        // asynchronously called
    }
);
