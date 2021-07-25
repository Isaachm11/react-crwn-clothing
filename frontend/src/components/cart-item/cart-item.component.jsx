import React from "react";

// import CustomButton from "../custom-button/custom-button.component";
// import { addItem } from "../../redux/cart/cart.actions";

// import "./cart-item.styles.scss";
import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
  SpanDetails,
} from "./cart-item.styles";

const CartItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;

  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer className="item-details">
        <SpanDetails className="name">{name}</SpanDetails>
        <SpanDetails className="price">
          {quantity} x ${price}
        </SpanDetails>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
