import Header from "./components/Header.jsx";
import * as React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NewArrivalContainer from "./components/NewArrivalContainer.jsx";
import Images from "./components/Images.jsx";
import ImageDiaporama from "./components/ImageDiaporama.jsx";
import Container from "@mui/material/Container";
import HomeImage from "./components/HomeImage.jsx";
import Delivery from "./components/Delivery.jsx";
import FeaturedProducts from "./components/FeaturedProducts.jsx";
import Button from "@mui/material/Button";
import {NavigateNext} from "@mui/icons-material";



const defaultTheme = createTheme();
function App() {


  return (
    <>
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Delivery />
            <Header />
            <HomeImage />
            <div>
                <h1 style={{
                    fontSize: '4rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    fontFamily: 'Roboto, sans-serif',
                }}>
                    Découvrez nos produits
                </h1>
                <Button
                    variant="contained"
                    endIcon={<NavigateNext sx={{ backgroundColor: '#fff', color: '#000', borderRadius: 10 }} />}
                    sx={{ height: '3em', fontSize: '1em', mt: -5, borderRadius: 5, backgroundColor: '#000', alignContent: 'center', marginLeft: '50%', transform: 'translateX(-50%)'}}
                >
                    Voir maintenant
                </Button>

            </div>

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
                marginLeft: '2em',
                fontSize: '1.5rem',
                fontWeight: 500,

                // letterSpacing: '.1rem',
            }}>
                Produits phares du moment
            </div>
            <br/>
            <FeaturedProducts />
            <Images />
            <NewArrivalContainer />

        </ThemeProvider>
    </>
  )
}

export default App
