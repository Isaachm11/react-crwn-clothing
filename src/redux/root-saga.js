import { all, call } from "redux-saga/effects";
import { fetchCollectionsStart } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";


export default function* rootSaga(){
	// all: calls any number of sagas inside array and initlilizes them on separated tasks streams
	yield all([
		call(fetchCollectionsStart),
		call(userSagas)
	])
}