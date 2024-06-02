import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { UserDataProvider } from "./Context/UserDataProvider/UserDataProvider.jsx";
import { AuthNavigationModalProvider } from "./Context/AuthNavigationModalProvider/AuthNavigationModalProvider.jsx";
localStorage.setItem("chakra-ui-color-mode", "light");
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <UserDataProvider>
          <AuthNavigationModalProvider>
            <App />
          </AuthNavigationModalProvider>
        </UserDataProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
