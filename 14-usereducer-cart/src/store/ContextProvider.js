import store from "./store";
import { useEffect, useState, useReducer } from "react";

const URL = "https://course-api.com/react-useReducer-cart-project";

function itemsReducer(state, action) {
  switch (action.type) {
    case "INITIALIZE_CART":
      return action.data;

    case "ADD_ITEM_TO_CART":
      return state.push(action.item);

    case "INCREASE_ITEM_AMOUNT":
      const incIdx = state.findIndex((item) => item.id === action.id);
      if (incIdx === -1) return;
      state[incIdx].amount++;
      return [...state];

    case "DECREASE_ITEM_AMOUNT":
      const decIdx = state.findIndex((item) => item.id === action.id);
      if (decIdx === -1) return;
      state[decIdx].amount--;
      if (!state[decIdx].amount) state.splice(decIdx, 1);
      return [...state];

    case "REMOVE_ITEM":
      const removeIdx = state.findIndex((item) => item.id === action.id);
      if (removeIdx === -1) return;
      state.splice(removeIdx, 1);
      return [...state];

    case "REMOVE_ALL_ITEMS":
      return [];

    default:
      throw new Error("Unexpected action");
  }
}

export default function ContextProvider(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, dispatchItemActions] = useReducer(itemsReducer, []);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetch(URL);
      const data = await res.json();
      dispatchItemActions({ type: "INITIALIZE_CART", data: data });
      setIsLoading(false);
    })();
  }, []);
  return (
    <store.Provider
      value={{
        isLoading: isLoading,
        cartItems: cartItems,
        dispatchItemActions: dispatchItemActions,
      }}
    >
      {props.children}
    </store.Provider>
  );
}
