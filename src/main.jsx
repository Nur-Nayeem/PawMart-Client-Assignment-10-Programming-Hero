import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Routes";
import AuthProvider from "./Contexts/AuthProvider";
import ThemeProvider from "./Contexts/ThemeProvider";
import CategoryProvider from "./Contexts/CategoryProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <CategoryProvider>
          <RouterProvider router={router} />
        </CategoryProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
