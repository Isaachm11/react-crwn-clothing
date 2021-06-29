import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import { updateShopData } from "../../redux/shop/shop.actions";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

class ShopPage extends React.Component {
  unsuscribeFromSnapshot = null;

  componentDidMount() {
    const { updateShopData } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapShot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapShot);
      updateShopData(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateShopData: (collectionsMap) => dispatch(updateShopData(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
