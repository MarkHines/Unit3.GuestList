import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FetchProvider } from "./FetchContext.jsx";

createRoot(document.getElementById("root")).render(
  <FetchProvider>
    <App />
  </FetchProvider>
);
