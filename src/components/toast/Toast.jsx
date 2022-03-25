import React, { useContext } from "react";
import { ToastContext } from "../../context/toast-context";
import "./Toast.css";
export function Toast() {
    const {toastMsg} = useContext(ToastContext);
  return <div className="alert alert-info">{toastMsg}</div>;
}

export function ToastSuccess(){
    const {toastMsg} = useContext(ToastContext);
    return <div className="alert alert-success">{toastMsg}</div>;
}
