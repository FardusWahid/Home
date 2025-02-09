"use client";

import { createContext, useState, useContext, useCallback } from "react";

const MyContext = createContext(undefined);

export const MyProvider = ({ children }) => {
  const [select, setSelect] = useState("");
  const [search, setSearch] = useState("");

  const resetState = useCallback(() => {
    setSelect("");
    setSearch("");
  }, []);

  // Added method to update selection with validation
  const updateSelection = useCallback((newSelection) => {
    if (typeof newSelection === "string") {
      setSelect(newSelection);
    }
  }, []);

  const value = {
    select,
    setSelect: updateSelection,
    search,
    setSearch,
    resetState,
  };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};