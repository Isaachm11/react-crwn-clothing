import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

import { setCurrentUser } from "./redux/user/user.actions";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import Header from "./components/header/header.component.jsx";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

class App extends React.Component {
  // Var to log out the user
  unsubscibreFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    
    // this.unsubscibreFromAuth = auth.onAuthStateChanged(...
    // Returns a method that when is called, it signs out the user
    this.unsubscibreFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
  }

  // Log out the user
  componentWillUnmount() {
    this.unsubscibreFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
