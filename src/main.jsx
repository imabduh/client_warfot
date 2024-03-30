import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Layout } from "./contexts/LayoutContext.jsx";
import { Api } from "./contexts/ApiContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Api>
      <Layout>
        <App />
      </Layout>
    </Api>
  </React.StrictMode>
);
