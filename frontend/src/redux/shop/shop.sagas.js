// Sagas help run functions concurrently: Run them all together in a way that does not block the execution
// Help run the app and another sagas without having to wait for one to finish
// Also we can cancel a task
import { takeLatest, all, call, put } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    // call: invokes functions and is able to yield in case it takes long
    // also with yield helps get get control at this point of the exec back to saga middleware in case it need to cacenl and go to a different place
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);

    // put is the saga effect for creating actions. Is the dispacth in sagas
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error));
  }
}

export function* onFetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FECTCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(onFetchCollectionsStart)]);
}