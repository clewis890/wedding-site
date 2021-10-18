import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'


// while testing payment in Test Mode,
// use CC number 424242424242424242 and
// whatever exp date and cvv code

class StripeWrapper extends Component {
    render() {
        return (
            // tell Stripe exactly what currency
            // and domination of currency we are wanting
            // The default is USD Amount in Cents
            <StripeCheckout
                name="Gift"
                description="Send any amount directly to Antonia and Clark"
                currency="USD"
                // token is a callback function retrieving the token representing the payment amount from client
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                stripeKey="pk_live_51Hifn7L435BZ8mnVXYyK23ZM4hl1pLkRnq8NULotNPNdn9iYZwEKLLXqxmDg9whUrkf8MUhAAUJiwkdiEilsc8WF009gJwJsqi"
            >
                <button className="btn">
                    Send us a cash gift directly here!
                </button>
            </StripeCheckout>
        );
    }
}

export default StripeWrapper;
