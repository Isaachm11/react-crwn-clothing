import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component.jsx";
import CustomButtom from "../custom-button/custom-button.component.jsx";

// import { auth, SignInWithGoogle } from "../../firebase/firebase.utils.js";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions.js";

// import "./sign-in.styles.scss";
import {
  SingInContainer,
  TitleContainer,
  ButtonsContainer,
} from "./sign-in.styles";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SingInContainer>
      <TitleContainer>I already have an account</TitleContainer>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          required
        />

        <ButtonsContainer>
          <CustomButtom type="submit">Sign in</CustomButtom>
          <CustomButtom
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButtom>
        </ButtonsContainer>
      </form>
    </SingInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
