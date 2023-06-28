const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };

    case "MY_PRODUCTS_DATA":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };

    case "PRODUCT_DATA_ERROR ":
      return { ...state, isLoading: false, isError: true };


    case "SET_Limited_LOADING":
      return { ...state, isLimitedLoading: true };

    case "MY_LIMITED_PRODUCTS_DATA":
      return {
        ...state,
        isLimitedLoading: false,
        limitedProducts: action.payload,
      };

    case "LIMITED_PRODUCT_DATA_ERROR ":
      return { ...state, isLimitedLoading: false, isLimitedError: true };

    default:
      return state;
  }
};

export default productReducer;
