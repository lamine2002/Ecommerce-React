import { useState, useEffect } from "react";
import useImage from "./useImage.jsx";
import Grid from "@mui/material/Grid";
import {Card, CardMedia, CircularProgress} from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";

const Images = () => {
    const { images, error, loading } = useImage();

    if (error) return <p>A network error was encountered</p>;
    if (loading) return <CircularProgress />;
    console.log(images);
    return (
        <>

            <div style={
                {
                    width: '90%',
                    marginLeft: '5%',
                    marginTop: '5%',
                    marginBottom: '5%'
                }
            }>
                <Grid container spacing={2}   > {/* Ajoutez justifyContent="center" ici */}
                    {images.sort((a,b) => b.id - a.id).map((image) => {
                        return (
                            <Grid item xs={6}  md={4}  key={image.id}>
                                {/*// xs permet de définir le nombre de colonnes pour les petits écrans, sm pour les écrans moyens, md pour les écrans moyens et lg pour les grands écrans.*/}
                                {/*// xs={12} signifie que l'élément occupe toute la largeur de l'écran pour les petits écrans, sm={6} signifie que l'élément occupe la moitié de la largeur de l'écran pour les écrans moyens, md={4} signifie que l'élément occupe le tiers de la largeur de l'écran pour les écrans moyens et lg={3} signifie que l'élément occupe un quart de la largeur de l'écran pour les grands écrans.*/}
                                <Link   to={`/products/${image.id}`} style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <Card>
                                        <CardMedia
                                            component="img"

                                            sx={{
                                                objectFit: 'contain',
                                                maxHeight: 433,
                                                '@media (max-width: 600px)' : {
                                                    maxHeight: 323
                                                }

                                            }}
                                            image={image.image}
                                            alt={image.title}
                                        />
                                    </Card>
                                    <Typography variant="h5" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#3b3b3b' }}>
                                        {/*// faire un separateur de milliers*/}
                                        {(image.price * 500).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} FCFA
                                        {/*{(image.price * 500).toLocaleString().replace(" ", '.')} FCFA*/}

                                    </Typography>
                                    <Typography variant="h6" component="div" >
                                        {image.title}
                                    </Typography>
                                </Link>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>


           </>
    );
};
export default Images;