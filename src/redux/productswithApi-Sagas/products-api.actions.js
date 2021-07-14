import ProductApiActionTypes from "./products-api.types";

export const getProductsFromAPI = () => ({
  type: ProductApiActionTypes.START_TO_GET_PRODUCTS_INFORMATION,
});
