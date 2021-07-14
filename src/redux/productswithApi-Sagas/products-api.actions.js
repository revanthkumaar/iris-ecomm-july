import ProductApiActionTypes from "./products-api.types";

export const getProductsFromAPI = () => ({
  type: ProductApiActionTypes.GET_PRODUCT_INFORMATION
});
