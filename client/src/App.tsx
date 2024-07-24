import { useMemo } from "react";

import "./App.css";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./scenes/navbar";
import Dashboard from "@/scenes/dashBoard/index";
import Prediction from "./scenes/prediction";
import AddData from "./scenes/addData";
function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box height="100%" width="100%" padding="1rem 2rem 4rem 2rem">
          <Navbar />
          <Routes>
            <Route path="/addData" element={<AddData />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/prediction" element={<Prediction />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
