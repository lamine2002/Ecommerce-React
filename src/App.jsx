import Header from "./components/Header.jsx";
import * as React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NewArrivalContainer from "./components/NewArrivalContainer.jsx";

const defaultTheme = createTheme();
function App() {


  return (
    <>
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Header />
            <NewArrivalContainer />
        </ThemeProvider>
    </>
  )
}

export default App
