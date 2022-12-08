import classes from "./NavBar.module.css";
import { HiShoppingCart } from "react-icons/hi";
import { useContext } from "react";
import store from "../store/store";

export default function NavBar() {
  const ctx = useContext(store);
  let numCartItems = 0;
  ctx.cartItems.forEach((item) => (numCartItems += item.amount));
  return (
    <nav className={classes["navBar"]}>
      <h2>Use Reducer</h2>
      <div className={classes["cart"]}>
        <HiShoppingCart />
        <span>{numCartItems}</span>
      </div>
    </nav>
  );
}
