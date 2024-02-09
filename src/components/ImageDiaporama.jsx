import React, { useState } from 'react';
import { makeStyles } from '@mui/material/styles';
import { Box, Slider } from '@mui/material';
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '500px',
        overflowX: 'auto',
    },
    image: {
        width: '500px',
        height: '500px',
        objectFit: 'cover',
    },
    slider: {
        width: '100%',
    },
});

const ImageDiaporama = () => {
    const classes = useStyles();

    const [images, setImages] = useState([
        {
            url: '../public/asset/diaporama/imageSlide1.png',
        },
        {
            url: 'https://images.unsplash.com/photo-1503023343279-39746739f571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fHxMTYyNTc1ODc1MA&auto=format&fit=crop&w=1000&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1497215728959-453237771f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fHxMTYyNTc1ODc1MA&auto=format&fit=crop&w=1000&q=80',
        },
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSliderChange = (event, value) => {
        setCurrentIndex(value);
    };

    return (
        <Box className={classes.root}>
            <Box>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.url}
                        alt={`Image ${index + 1}`} // Utilisation d'un texte alternatif par défaut
                        className={classes.image}
                        style={{
                            opacity: currentIndex === index ? 1 : 0.5,
                        }}
                    />
                ))}
            </Box>
            <Slider
                className={classes.slider}
                value={currentIndex}
                min={0}
                max={images.length - 1}
                onChange={handleSliderChange}
            />
        </Box>
    );
};

export default ImageDiaporama;
