import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
	CartDropdownStyles,
	CartItemsStyles,
	ButtonStyles,
	EmptyMessage,
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<CartDropdownStyles>
		<CartItemsStyles>
			{cartItems.length ? (
				cartItems.map(cartItem => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<EmptyMessage>Your cart is empty</EmptyMessage>
			)}
		</CartItemsStyles>
		<ButtonStyles
			onClick={() => {
				history.push('/checkout');
				dispatch(toggleCartHidden());
			}}
		>
			GO TO CHECKOUT
		</ButtonStyles>
	</CartDropdownStyles>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
