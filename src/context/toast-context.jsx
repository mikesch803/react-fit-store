import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toastState, setToastState] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastStyles, setToastStyles] = useState();

  return (
    <ToastContext.Provider
      value={{
        toastState,
        setToastState,
        setToastMsg,
        toastMsg,
        toastStyles,
        setToastStyles,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { ToastContext, ToastProvider, useToast };
