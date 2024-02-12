import React from 'react';
import '../style/diapo.css';

const images = [
    {
        src: '../public/asset/diaporama/imageSlide1.png',
        alt: 'Cadeaux tendance',
        description: 'Cadeaux tendance',
    },
    {
        src: '../public/asset/diaporama/imageSlide2.png',
        alt: 'Nike V2K Run',
        description: 'Nike V2K Run'
    },
    {
        src: '../public/asset/diaporama/imageSlide3.png',
        alt: 'Les nouveautés',
        description: 'Les nouveautés'
    },
    {
        src: '../public/asset/diaporama/imageSlide4.png',
        alt: 'Meilleures ventes',
        description: 'Meilleures ventes'
    },
    {
        src: '../public/asset/diaporama/imageSlide5.png',
        alt: 'Collection d\'hiver',
        description: 'Collection d\'hiver'
    },
];
function ImageDiaporama() {
    // code liste d'images avec scroll

    return (
        <div className="scroll-container">

                {images.map((image, index) => (
                        <img src={image.src} alt={image.alt} />

                ))}
        </div>

    );


}
export default ImageDiaporama;