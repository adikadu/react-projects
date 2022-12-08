import classes from "./App.module.css";
import store from "./store/store";
import { useContext } from "react";
import NavBar from "./components/NavBar";
import CartItem from "./components/CartItem";
import TotalAmount from "./components/TotalAmount";
import { Fragment } from "react";

function App() {
  const ctx = useContext(store);
  const cartItemsRender =
    ctx.cartItems.length === 0 ? (
      <h3 className={classes["msg-cart-empty"]}>is currently empty</h3>
    ) : (
      <Fragment>
        <ul>
          {ctx.cartItems.map((item) => (
            <li key={item.id}>
              <CartItem {...item} />
            </li>
          ))}
        </ul>
        <hr />
        <TotalAmount />
        <button
          onClick={() => ctx.dispatchItemActions({ type: "REMOVE_ALL_ITEMS" })}
          className={classes["cart-clear"]}
        >
          Clear Cart
        </button>
      </Fragment>
    );
  const mainRender = ctx.isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <Fragment>
      <NavBar />
      <div className={classes["content"]}>
        <h1>Your bag</h1>
        {cartItemsRender}
      </div>
    </Fragment>
  );
  return <main>{mainRender}</main>;
}

export default App;
