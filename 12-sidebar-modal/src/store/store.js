import { createContext } from "react";

const Context = createContext({
  showModal: false,
  modalMessage: "temp",
  hideModalHandler: () => {},
});

export default Context;
