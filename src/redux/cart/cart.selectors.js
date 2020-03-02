import { createSelector } from "reselect";

// input selector
const selectCart = state => state.cart;

// output selector
export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems =>
		cartItems.reduce(
			(accumalatedQyantity, cartItem) =>
				accumalatedQyantity + cartItem.quantity,
			0
		)
);
