import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './checkout.styles.scss'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className="checkout-header">
            <div className="checkout-block">
                <span>Product</span>
            </div>
            <div className="checkout-block">
                <span>Description</span>
            </div>
            <div className="checkout-block">
                <span>Quantity</span>
            </div>
            <div className="checkout-block">
                <span>Price</span>
            </div>
            <div className="checkout-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))
        }
        <div className="total">Total : ${total}</div>
        <div className="test-warning">
            *Please use the following test credit card for payments*
            <br />
            Card Number : 4242 4242 4242 4242<br />
            Exp : 01/25<br />
            CVV : 786
        </div>
        <br /><br />
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);