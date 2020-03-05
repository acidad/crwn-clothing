import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInAndSignUpStyles } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
	<SignInAndSignUpStyles>
		<SignIn />
		<SignUp />
	</SignInAndSignUpStyles>
);

export default SignInAndSignUpPage;
