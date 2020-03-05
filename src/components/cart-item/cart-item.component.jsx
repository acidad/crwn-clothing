import React from 'react';

import {
	CartItemStyles,
	ImageStyles,
	ItemDetailsStyles,
	NameStyles,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<CartItemStyles>
		<ImageStyles src={imageUrl} alt="item" />
		<ItemDetailsStyles>
			<NameStyles>{name}</NameStyles>
			<span className="price">
				{quantity} x ${price}
			</span>
		</ItemDetailsStyles>
	</CartItemStyles>
);

export default CartItem;
