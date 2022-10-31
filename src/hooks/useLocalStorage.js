import { useState, useEffect } from "react";

function useLocalStorage(itemKey, initValue = null) {
  const store = localStorage.getItem(itemKey) || initValue;

  const [item, setItem] = useState(store);

  useEffect(
    function setItemLocalStorage() {
      if (!item) {
        localStorage.removeItem(itemKey);
      } else {
        localStorage.setItem(itemKey, item);
      }
    },
    [itemKey, item]
  );

  return [item, setItem];
}

export default useLocalStorage;
