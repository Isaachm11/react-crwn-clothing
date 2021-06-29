import ShopActionTypes from "./shop.types";

export const updateShopData = (shopData) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: shopData,
});
