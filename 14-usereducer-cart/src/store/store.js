import { createContext } from "react";

const store = createContext({
  isLoading: false,
  cartItems: [],
  dispatchItemActions: () => {},
});

export default store;
