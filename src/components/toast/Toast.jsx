import React, { useContext } from "react";
import { ToastContext } from "../../context/toast-context";
import "./Toast.css";
export function Toast() {
  const { toastMsg, toastStyles } = useContext(ToastContext);
  return <div className={toastStyles}>{toastMsg}</div>;
}
