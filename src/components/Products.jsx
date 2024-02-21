import {useParams} from "react-router-dom";
import Header from "./Header.jsx";
import Delivery from "./Delivery.jsx";
import * as React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ProductDetails from "./ProductDetails.jsx";
import Images from "./Images.jsx";
import Footer from "./Footer.jsx";

const defaultTheme = createTheme();
function Products() {
    const {id} =  useParams();
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Delivery />
            <Header />

            {!id && <div><h1 style={{
                fontSize: '4rem',
                fontWeight: 'bold',
                textAlign: 'center',
                textTransform: 'uppercase',
                fontFamily: 'Roboto, sans-serif',
            }}>
                Découvrez nos produits
            </h1>
                <Images />
            </div>
            }
            {id && <ProductDetails id={parseInt(id)} />}
            <Footer />
        </ThemeProvider>

    );
}

export default Products;