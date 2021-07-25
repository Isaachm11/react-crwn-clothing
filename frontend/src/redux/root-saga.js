import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";
import { shopSagas } from "./shop/shop.sagas";

export default function* rootSaga(){
	// all: calls any number of sagas inside array and initlilizes them on separated tasks streams
	yield all([
		call(userSagas),
		call(cartSagas),
		call(shopSagas),
	])
}