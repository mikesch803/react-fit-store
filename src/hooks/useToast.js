import { useState } from "react";
import { v4 as uuid } from "uuid";

export const useToast = () => {
  const [toastList, setToastList] = useState([]);
// console.log(toastList ,' toastlist')
  const toastHandler = (msg, type) => {
    // console.log(msg, type, ' working')
    setToastList([...toastList, { id: uuid(), msg: msg, type: type }]);
  };

  const removeToastHandler = (id) => {
    const updatedToastList = toastList.filter((item) => item.id !== id);
    setToastList(updatedToastList);
  };
  return { toastHandler, removeToastHandler, toastList, setToastList };
};
