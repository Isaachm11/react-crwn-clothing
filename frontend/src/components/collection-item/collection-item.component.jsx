import React from "react";
import { connect } from "react-redux";

// import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

// import "./collection-item.styles.scss";
import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  NameSpan,
  PriceSpan,
  AddButton,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl}/>
      <CollectionFooterContainer>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>${price}</PriceSpan>
      </CollectionFooterContainer>
      <AddButton invertedColors onClick={() => addItem(item)}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
