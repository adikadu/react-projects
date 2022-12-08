import classes from "./App.module.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import ContextProvider from "./store/ContextProvider";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const props = {
    modalMessage: "hello world",
    hideModalHandler: () => setShowModal(false),
    showSidebarHandler: () => setShowSidebar(true),
    hidesidebarHandler: () => setShowSidebar(false),
  };
  return (
    <ContextProvider {...props}>
      <main className={classes["main"]}>
        <button
          className={classes["btn-show-modal"]}
          onClick={() => setShowModal(true)}
        >
          Show Modal
        </button>
        {showModal && createPortal(<Modal />, document.getElementById("modal"))}
        <button
          onClick={props.showSidebarHandler}
          className={classes["btn-show--sidebar"]}
        >
          ##
        </button>
        {showSidebar && <Sidebar />}
      </main>
    </ContextProvider>
  );
}

export default App;
