import React from "react";

import { connect } from "react-redux";

import {
  addItem,
  removeItem,
  clearItemFromCart,
} from "../../redux/cart/cart.actions";

// import "./checkout-item.styles.scss";
import {
  CheckoutItemContainer,
  ImageContainer,
  ImageItem,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItemFromCart }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <ImageItem src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>$ {price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (cartItem) => dispatch(addItem(cartItem)),
  removeItem: (cartItem) => dispatch(removeItem(cartItem)),
  clearItemFromCart: (cartItem) => dispatch(clearItemFromCart(cartItem)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
