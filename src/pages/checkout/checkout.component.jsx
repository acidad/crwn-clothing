import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

// import './checkout.styles.scss';
import {
	CheckoutPageStyles,
	CheckoutHeaderStyles,
	HeaderBlockStyles,
	TotalStyles,
	TestWarningStyles,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
	<CheckoutPageStyles>
		<CheckoutHeaderStyles>
			<HeaderBlockStyles>
				<span>Product</span>
			</HeaderBlockStyles>
			<HeaderBlockStyles>
				<span>Descirption</span>
			</HeaderBlockStyles>
			<HeaderBlockStyles>
				<span>Quantity</span>
			</HeaderBlockStyles>
			<HeaderBlockStyles>
				<span>Price</span>
			</HeaderBlockStyles>
			<HeaderBlockStyles>
				<span>Remove</span>
			</HeaderBlockStyles>
		</CheckoutHeaderStyles>
		{cartItems.map(cartItem => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}
		<TotalStyles>TOTAL: ${total}</TotalStyles>
		<TestWarningStyles>
			*Please use the following test credit card for payments*
			<br />
			4242 4242 4242 4242 - Exp: 01/29 CVV: 123
		</TestWarningStyles>

		<StripeCheckoutButton price={total} />
	</CheckoutPageStyles>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
