import classes from "./Home.module.css";
import { useContext } from "react";
import store from "../store/store";
import Cocktails from "./Cocktails";

export default function Home() {
  const ctx = useContext(store);
  if (ctx.isLoading) return <h2>Loading...</h2>;
  return (
    <section className={classes["home"]}>
      <Cocktails />
    </section>
  );
}
