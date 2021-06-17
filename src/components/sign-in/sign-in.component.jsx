import React from "react";

import FormInput from "../form-input/form-input.component.jsx";
import CustomButtom from "../custom-button/custom-button.component.jsx";

import { auth, SignInWithGoogle } from "../../firebase/firebase.utils.js";

// import "./sign-in.styles.scss";
import {
  SingInContainer,
TitleContainer,
ButtonsContainer
} from './sign-in.styles'

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SingInContainer>
        <TitleContainer>I already have an account</TitleContainer>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <ButtonsContainer>
            <CustomButtom type="submit">Sign in</CustomButtom>
            <CustomButtom type="button" onClick={SignInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButtom>
          </ButtonsContainer>
        </form>
      </SingInContainer>
    );
  }
}

export default SignIn;
