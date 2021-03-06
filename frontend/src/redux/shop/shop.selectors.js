import { createSelector } from "reselect";
// import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

export const selectIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
)

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

// WAY TO MEMOIZE FUNCTION
// export const selectCollection = memoize((collectionUrlParam) =>
//   createSelector([selectCollections], (collections) =>
//     collections.find(
//       (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//     )
//   )
// );

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

  export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    (shop) => !!shop.collections
  )