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

    default:
      return state;
  }
};

export default productReducer;
