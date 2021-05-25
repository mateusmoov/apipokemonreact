import React, { useState, useEffect } from "react";
import Api from "./services/api.js";
import CardPokemon from "./components/Card/index";
import Input from "./components/Input/index";
import { GlobalStyle } from "./reset.js";
import Home from "./pages/Home/index";

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
