import Context from "./store";

export default function ContextProvider(props) {
  return (
    <Context.Provider
      value={{
        modalMessage: props.modalMessage,
        hideModalHandler: props.hideModalHandler,
        hidesidebarHandler: props.hidesidebarHandler,
        showSidebarHandler: props.showSidebarHandler,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
