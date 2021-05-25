import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const UserProvider = ({ children }) => {
  const [pokemonName, setPokemonName] = useState("");

  return (
    <MyContext.Provider
    value={{
        pokemonName,
        setPokemonName,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
