import { useState, useEffect } from "react";
import useImage from "./useImage.jsx";


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
        </>
    );
};
export default Images;