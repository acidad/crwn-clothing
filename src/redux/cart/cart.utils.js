export const addItemToCart = (cartItems, cartItemToAdd) => {
	// exisitingcartitem will be first item found that cartItem.id === to cartItemToAdd.id
	const exisitingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	);

	if (exisitingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
