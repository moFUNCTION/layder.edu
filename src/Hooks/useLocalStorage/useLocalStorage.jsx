import React, { useEffect } from "react";

export const useLocalStorage = ({ path, value }) => {
  useEffect(() => {
    localStorage.setItem(path, JSON.stringify(value));
  }, [value]);
  return { value: JSON.stringify(localStorage.getItem(path)) };
};
