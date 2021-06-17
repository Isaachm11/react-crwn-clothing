import React from "react";
import CollectionItem from "../collection-item/collection-item.component.jsx";

// import "./collection-preview.styles.scss";
import {
  CollectionPreviewContainer,
  TitleHeader,
  PreviewContainer,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleHeader>{title.toUpperCase()}</TitleHeader>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
