import Header from "./components/Header.jsx";
import * as React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NewArrivalContainer from "./components/NewArrivalContainer.jsx";
import Images from "./components/Images.jsx";
import ImageDiaporama from "./components/ImageDiaporama.jsx";
import Container from "@mui/material/Container";
import HomeImage from "./components/HomeImage.jsx";



const defaultTheme = createTheme();
function App() {


  return (
    <>
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Header />
            <HomeImage />
            <br />
            <div style={{
                marginLeft: '1.5em',
                fontSize: '2rem',
                fontWeight: 500,
                letterSpacing: '.1rem',
            }}>
                En ce moment
            </div>
            <ImageDiaporama />
            <br />
            <div style={{
                marginLeft: '1.5em',
                fontSize: '2rem',
                fontWeight: 500,
                letterSpacing: '.1rem',
            }}>
                Produits phares du moment
            </div>
            <br/>
            {/*<Images />*/}
            <NewArrivalContainer />

        </ThemeProvider>
    </>
  )
}

export default App
