
const   env = require('../environnement'),
        stripe = require('stripe')(env.stripe.private_key);

stripe.subscriptions.create(
    {
        customer: '',
        items: [
        {price: 'price_1GsSqI2eZvKYlo2CAIrUmhu0'},
        ],
    },
    function(err, subscription) {
        // asynchronously called
    }
);
