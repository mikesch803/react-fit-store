import { useState } from "react";

export function useFilterModal() {
  const [asideStyles, setAsideStyles] = useState();
  const filterHandler = () => {
    setAsideStyles("block");
    if(asideStyles === 'block') setAsideStyles('')
  };
  return { asideStyles, filterHandler };
}
