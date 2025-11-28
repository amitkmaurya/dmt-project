 
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IndiflyHomepage } from "./screens/IndiflyHomepage";

const root = createRoot(document.getElementById("app"));

root.render(
  <StrictMode>
    <IndiflyHomepage />
  </StrictMode>
);
