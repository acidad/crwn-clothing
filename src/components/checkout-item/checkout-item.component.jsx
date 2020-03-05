import React from 'react';
import { connect } from 'react-redux';

import {
	clearItemFromCart,
	addItem,
	removeItem,
} from '../../redux/cart/cart.actions';

import {
	CheckoutItemContainer,
	ImageContainer,
	NameStyles,
	PriceStyles,
	QuantityStyles,
	ValueStyles,
	RemoveButtonStyles,
	ArrowStyles,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt="item" />
			</ImageContainer>
			<NameStyles>{name}</NameStyles>
			<QuantityStyles>
				<ArrowStyles onClick={() => removeItem(cartItem)}>&#10094;</ArrowStyles>
				<ValueStyles>{quantity}</ValueStyles>
				<ArrowStyles onClick={() => addItem(cartItem)}>&#10095;</ArrowStyles>
			</QuantityStyles>
			<PriceStyles>{price}</PriceStyles>
			<RemoveButtonStyles onClick={() => clearItem(cartItem)}>
				&#10005;
			</RemoveButtonStyles>
		</CheckoutItemContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItemFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
