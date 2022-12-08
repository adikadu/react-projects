import classes from "./App.module.css";
import MenuItem from "./components/MenuItem";
import { useState } from "react";
import data from "./data";

function App() {
  const [items, setItems] = useState(data);

  return (
    <main>
      <h1 className={classes["top-heading"]}>Our Menu</h1>
      <hr />
      <ul className={classes["menu-types"]}>
        <li onClick={() => setItems(data)}>All</li>
        <li
          onClick={() =>
            setItems(() => data.filter((item) => item.category === "breakfast"))
          }
        >
          Breakfast
        </li>
        <li
          onClick={() =>
            setItems(() => data.filter((item) => item.category === "lunch"))
          }
        >
          Lunch
        </li>
        <li
          onClick={() =>
            setItems(() => data.filter((item) => item.category === "shakes"))
          }
        >
          Shakes
        </li>
      </ul>
      <div className={classes["menu-items"]}>
        {items.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}

export default App;
