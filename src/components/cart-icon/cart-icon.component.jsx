import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {
	CartIconStyles,
	ShoppingIconStyles,
	ItemCountStyles,
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<CartIconStyles onClick={toggleCartHidden}>
		<ShoppingIconStyles />
		<ItemCountStyles>{itemCount}</ItemCountStyles>
	</CartIconStyles>
);

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
