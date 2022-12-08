import classes from "./App.module.css";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { useState, useRef } from "react";

function App() {
  const inpRef = useRef();
  const [items, setItems] = useState([]);
  const [notification, setNotification] = useState(null);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const inpValue = inpRef.current.value;
    inpRef.current.value = "";
    const inpObj = {
      id: Math.floor(Math.random() * 1000),
      item: inpValue,
    };
    setItems((prev) => [...prev, inpObj]);
    setNotification("Item added successfully!");
    const timeout = setTimeout(() => {
      setNotification(null);
      clearTimeout(timeout);
    }, 2000);
  };
  const editBtnHandler = (id) => {
    const item = items.filter((item) => item.id === id)[0];
    inpRef.current.value = item.item;
    setItems((prev) => prev.filter((item) => item.id !== id));
    setNotification("Item can be edited now!");
    const timeout = setTimeout(() => {
      setNotification(null);
      clearTimeout(timeout);
    }, 2000);
  };

  const deleteBtnHandler = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    setNotification("Item was deleted successfully!");
    const timeout = setTimeout(() => {
      setNotification(null);
      clearTimeout(timeout);
    }, 2000);
  };

  const clearItems = (id) => {
    setItems([]);
    setNotification("All items were deleted successfully!");
    const timeout = setTimeout(() => {
      setNotification(null);
      clearTimeout(timeout);
    }, 2000);
  };
  return (
    <main>
      {notification !== null && (
        <span className={classes["notification"]}>{notification}</span>
      )}
      <div className={classes["container"]}>
        <h1>Grocery Bud</h1>
        <form onSubmit={formSubmitHandler}>
          <input ref={inpRef} type="text" placeholder="e.g. eggs" />
          <button>Submit</button>
        </form>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <span className={classes["item"]}>{item.item}</span>
              <button onClick={() => editBtnHandler(item.id)}>
                <FaRegEdit className={classes["btn--edit"]} />
              </button>
              <button onClick={() => deleteBtnHandler(item.id)}>
                <MdOutlineDelete className={classes["btn--delete"]} />
              </button>
            </li>
          ))}
        </ul>
        {items.length > 0 && (
          <button onClick={clearItems} className={classes["btn--clear"]}>
            Clear Items
          </button>
        )}
      </div>
    </main>
  );
}

export default App;
