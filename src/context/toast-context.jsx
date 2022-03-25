import { createContext, useState } from "react";

const ToastContext = createContext();

const ToastProvider = ({ children }) => {

const [toastState, setToastState] = useState(false);
const [toastMsg, setToastMsg] = useState("");

  return (
    <ToastContext.Provider value={{ toastState,setToastState,setToastMsg,toastMsg }}>
      {children}
    </ToastContext.Provider>
  );
};

export {ToastContext, ToastProvider}
