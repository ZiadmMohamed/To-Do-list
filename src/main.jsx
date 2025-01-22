import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import App from "./App.jsx";
import { TasksProvider } from "./common/TasksContext.jsx";

// Define the custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Your primary color
      light: "#4791db", // Optional light variant
      dark: "#115293", // Optional dark variant
      contrastText: "#ffffff", // Optional contrast text
    },
    secondary: {
      main: "#dc004e", // Your secondary color
      light: "#e33371", // Optional light variant
      dark: "#9a0036", // Optional dark variant
      contrastText: "#ffffff", // Optional contrast text
    },
  },
  // typography: {
  //   fontFamily: "a",
  // },
});

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
    </StrictMode>
  </ThemeProvider>
);
