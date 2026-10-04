import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "katex/dist/katex.min.css";
import "./styles.css";
import App from "./App";
import { ProgressProvider } from "./state/ProgressContext";
import { CloudSyncProvider } from "./state/CloudSyncContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProgressProvider>
      <CloudSyncProvider>
        <App />
      </CloudSyncProvider>
    </ProgressProvider>
  </StrictMode>,
);
