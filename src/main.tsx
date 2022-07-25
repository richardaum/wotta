import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "./ChakraProvider";
import "./index.css";
import { Metadata } from "./Metadata";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Metadata />
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
