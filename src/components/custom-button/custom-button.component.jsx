import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGooogleSignIn, ...otherProps }) => (
	<button
		className={`${isGooogleSignIn ? "google-sign-in" : ""} custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
