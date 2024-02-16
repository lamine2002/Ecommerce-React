import { useState, useEffect } from "react";
import useImage from "./useImage.jsx";
import Grid from "@mui/material/Grid";
import {Card, CardMedia} from "@mui/material";


const Images = () => {
    const { images, error, loading } = useImage();

    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <>
            <h1>Images</h1>
            <ul>
                {images.map((image) => {
                    return (
                        <li key={image.id} style={{
                            width : '100px',
                            height: '100px',
                            display: 'inline',
                        }}>
                            <img src={image.image} alt={image.title} />
                        </li>
                    );
                })}
            </ul>

            <div style={{width: '94%', display: 'flex', justifyContent: 'space-around', marginBottom: '2em'}}>
                <Grid container spacing={1} className="FeaturedProducts" justifyContent="space-around" >
                    {cards.map((card, index) => (
                        <Grid item key={index} xs={2} sm={2} >
                            <Card sx={{width: '150%'}}>
                                <CardMedia
                                    component="div"
                                    sx={{
                                        // Rapport d'aspect 16:9
                                        // pt: '50%',
                                        height: '300px',
                                    }}
                                    image={card.image}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
};
export default Images;