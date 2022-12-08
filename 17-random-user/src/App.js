import classes from "./App.module.css";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userinfo, setUserinfo] = useState(null);
  const [getNewUser, setGetNewUser] = useState(true);
  const [displayInfo, setDisplayInfo] = useState(null);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      const username = `${data.results[0].name.first} ${data.results[0].name.last}`;
      setUserinfo({
        name: username,
        email: data.results[0].email,
        age: data.results[0].dob.age,
        country: data.results[0].location.country,
        phone: data.results[0].phone,
        password: data.results[0].login.password,
        image: data.results[0].picture.large,
      });
      setDisplayInfo({ key: "name", value: username });
      setIsLoading(false);
    })();
  }, [getNewUser]);
  return (
    <main>
      <div className={`${classes["bg"]} ${classes["bg-blk"]}`}></div>
      <div className={`${classes["bg"]} ${classes["bg-fff"]}`}>
        <div className={classes["user"]}>
          <div className={classes["bg-fff"]}></div>
          <img
            src={userinfo ? userinfo.image : defaultImage}
            alt={userinfo ? userinfo.name : ""}
          />
          <div className={classes["user-info"]}>
            <span>My {displayInfo ? displayInfo.key : "name"} is</span>
            <h1>{displayInfo ? displayInfo.value : ""}</h1>
            <div className={classes["icons"]}>
              <FaUser
                onMouseOver={() =>
                  setDisplayInfo({ key: "name", value: userinfo.name })
                }
                onMouseLeave={() =>
                  setDisplayInfo({ key: "name", value: userinfo.name })
                }
              />
              <FaEnvelopeOpen
                onMouseOver={() =>
                  setDisplayInfo({ key: "email", value: userinfo.email })
                }
                onMouseLeave={() =>
                  setDisplayInfo({ key: "name", value: userinfo.name })
                }
              />
              <FaCalendarTimes
                onMouseOver={() =>
                  setDisplayInfo({ key: "age", value: userinfo.age })
                }
                onMouseLeave={() =>
                  setDisplayInfo({ key: "name", value: userinfo.name })
                }
              />
              <FaMap
                onMouseOver={() =>
                  setDisplayInfo({ key: "country", value: userinfo.country })
                }
                onMouseLeave={() =>
                  setDisplayInfo({ key: "name", value: userinfo.name })
                }
              />
              <FaPhone
                onMouseOver={() =>
                  setDisplayInfo({ key: "phone", value: userinfo.phone })
                }
                onMouseLeave={() =>
                  setDisplayInfo({ key: "name", value: userinfo.name })
                }
              />
              <FaLock
                onMouseOver={() =>
                  setDisplayInfo({ key: "password", value: userinfo.password })
                }
                onMouseLeave={() =>
                  setDisplayInfo({ key: "name", value: userinfo.name })
                }
              />
            </div>
            <button onClick={() => setGetNewUser((prev) => !prev)}>
              {isLoading ? "Loading..." : "Random user"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
