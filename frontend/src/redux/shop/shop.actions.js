import ShopActionTypes from "./shop.types";

// Made because of redux-thunk
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FECTCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FECTCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FECTCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

// Handle asynchronous activity in an action instead of in a component
// Redux-Thunk middleware enters here
// export const fetchCollectionsStartAsync = () => {
//   return (dispatch) => {
//     const collectionRef = firestore.collection("collections");
//     dispatch(fetchCollectionsStart());

//     collectionRef
//       .get()
//       .then((snapShot) => {
//         const collectionsMap = convertCollectionSnapshotToMap(snapShot);
//         dispatch(fetchCollectionsSuccess(collectionsMap));
//       })
//       .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
//   };
// };
