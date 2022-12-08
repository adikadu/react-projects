import classes from "./TotalAmount.module.css";
import { useContext } from "react";
import store from "../store/store";

export default function TotalAmount() {
  const ctx = useContext(store);
  let ttlAmount = 0;
  ctx.cartItems.forEach((item) => (ttlAmount += item.amount * item.price));
  ttlAmount = Math.round((ttlAmount + Number.EPSILON) * 100) / 100;
  return (
    <div className={classes["total"]}>
      <span>Total</span>
      <span>${ttlAmount}</span>
    </div>
  );
}
