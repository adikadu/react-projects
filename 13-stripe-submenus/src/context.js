import { createContext, useContext, useState } from "react";

const context = createContext({
  // page: "xyz",
  // links: [],
  currrentActive: "",
  setCurrrentActive: () => {},
});

const ContextProvider = (props) => {
  const [currrentActive, setCurrrentActive] = useState();
  const [navBtnPos, setNavBtnPos] = useState([]);
  const navBtnPosHandler = (pagePos) => {
    // setNavBtnPos((prev) => [...prev, pagePos]);
  };
  // const navBtnPos = [];
  // setNavBtnPos((prev) => {
  //   if (!prev) return [pagePos];
  //   return prev.push(pagePos);
  // });
  return (
    <context.Provider
      value={{
        currrentActive: currrentActive,
        setCurrrentActive: setCurrrentActive,
        posHandler: navBtnPosHandler,
        navBtnPos: navBtnPos,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(context);
};

export { ContextProvider, useGlobalContext };
