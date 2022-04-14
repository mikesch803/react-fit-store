import { useState } from "react";

export function useFilterModal() {
  const [asideStyles, setAsideStyles] = useState();
  const filterHandler = () => {
    asideStyles === "block" ? setAsideStyles("none") : setAsideStyles("block");
  };
  return { asideStyles, filterHandler };
}
