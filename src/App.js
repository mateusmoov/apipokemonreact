import React from "react";
import { GlobalStyle } from "./reset.js";
import Home from "./pages/Home/index";
import {UserProvider} from './context/PokemonContext'

function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <Home />
    </UserProvider>
  );
}

export default App;
