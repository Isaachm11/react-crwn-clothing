import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component.jsx'
import SignUp from '../../components/sign-up/sign-up.component'

import './sign-in-and-sign-up.styles.scss';
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles'

// Functional component
const SignInAndSignUpPage = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
)

export default SignInAndSignUpPage;