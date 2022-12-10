import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;
    setLocalStorageValue(valueToStore);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };
  return [localStorageValue, setValue];
}

const getLocalStorageValue = (key, initialValue) => {
  const itemFromStorage = JSON.parse(localStorage.getItem(key));
  return itemFromStorage ? itemFromStorage : initialValue;
};

export default useLocalStorage;
