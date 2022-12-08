import { useState } from "react";
import classes from "./App.module.css";
import User from "./components/User";
import data from "./data";

function App() {
  const [userData, setUserData] = useState(data);
  const clearAllHandler = () => {
    if (userData) setUserData(null);
    else setUserData(data);
  };
  return (
    <div className={classes["container"]}>
      <h2>{userData ? userData.length : 0} birthdays today</h2>
      {userData && userData.map((user) => <User key={user.id} {...user} />)}
      <button onClick={clearAllHandler}>{`${
        userData ? "Clear" : "Show"
      } All`}</button>
    </div>
  );
}

export default App;
