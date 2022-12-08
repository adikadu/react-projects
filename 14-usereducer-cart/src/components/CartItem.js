import classes from "./CartItem.module.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useContext } from "react";
import store from "../store/store";

export default function CartItem({ id, title, price, img, amount }) {
  const ctx = useContext(store);

  return (
    <div className={classes["item"]}>
      <img src={img} alt={title} />
      <div className={classes["item-info"]}>
        <h3>{title}</h3>
        <span>${price}</span>
        <button
          onClick={() =>
            ctx.dispatchItemActions({ type: "REMOVE_ITEM", id: id })
          }
        >
          remove
        </button>
      </div>
      <div className={classes["item-inc-dec"]}>
        <IoIosArrowUp
          onClick={() =>
            ctx.dispatchItemActions({ type: "INCREASE_ITEM_AMOUNT", id: id })
          }
        />
        <span>{amount}</span>
        <IoIosArrowDown
          onClick={() =>
            ctx.dispatchItemActions({ type: "DECREASE_ITEM_AMOUNT", id: id })
          }
        />
      </div>
    </div>
  );
}
