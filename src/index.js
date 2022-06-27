import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import { GlobalStyle } from "./style/global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <GlobalStyle />
      <UserProvider>
        <App />
      </UserProvider>      
    </BrowserRouter>
  </>
);
