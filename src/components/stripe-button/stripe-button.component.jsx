import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const onToken = token => {
    console.log(token)
    alert('Payment Successfull')
}

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51H91Y1D01KyUiogXB67GerX63CfSjMAgWSm6Gt8fiDPobTBkbcoX25kj8D9FTGuKbdVgpvtODUmgEeC0ROeiRVSm00HniBamxi'

    return (
        <StripeCheckout
            label='Pay Now'
            name='Halo Apparels Ltd.'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton