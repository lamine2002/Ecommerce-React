import React from 'react';
import '../style/diapo.css';

const images = [
    {
        src: '/asset/diaporama/imageSlide1.png',
        alt: 'Cadeaux tendance',
        description: 'Cadeaux tendance',
    },
    {
        src: '/asset/diaporama/imageSlide2.png',
        alt: 'Nike V2K Run',
        description: 'Nike V2K Run'
    },
    {
        src: '/asset/diaporama/imageSlide6.png',
        alt: 'Les essentiels',
        description: 'Les essentiels'
    },
    {
        src: '/asset/diaporama/imageSlide3.png',
        alt: 'Les nouveautés',
        description: 'Les nouveautés'
    },
    {
        src: '/asset/diaporama/imageSlide4.png',
        alt: 'Meilleures ventes',
        description: 'Meilleures ventes'
    },
    /*{
        src: '/asset/diaporama/imageSlide5.png',
        alt: 'Collection d\'hiver',
        description: 'Collection d\'hiver'
    },*/

    {
        src: '/asset/diaporama/imageSlide7.jpeg',
        alt: 'Les classiques',
        description: 'Les classiques'
    },
    /* {
         src: '/asset/diaporama/imageSlide8.png',
         alt: 'Les incontournables',
         description: 'Les incontournables'
     },
     {
         src: '/asset/diaporama/imageSlide9.png',
         alt: 'Les indispensables',
         description: 'Les indispensables'
     },
     {
         src: '/asset/diaporama/imageSlide10.png',
         alt: 'Les must-have',
         description: 'Les must-have'
     },
     {
         src: '/asset/diaporama/imageSlide11.png',
         alt: 'Les exclusivités',
         description: 'Les exclusivités'
     },
     {
         src: '/asset/diaporama/imageSlide12.png',
         alt: 'Les inédits',
         description: 'Les inédits'
     },
     {
         src: '/asset/diaporama/imageSlide13.png',
         alt: 'Les nouveautés',
         description: 'Les nouveautés'
     },
     {
         src: '/asset/diaporama/imageSlide14.png',
         alt: 'Les dernières tendances',
         description: 'Les dernières tendances'
     },
     {
         src: '/asset/diaporama/imageSlide15.png',
         alt: 'Les dernières nouveautés',
         description: 'Les dernières nouveautés'
     },
     {
         src: '/asset/diaporama/imageSlide16.png',
         alt: 'Les dernières exclusivités',
         description: 'Les dernières exclusivités'
     },
     {
         src: '/asset/diaporama/imageSlide17.png',
         alt: 'Les dernières inédits',
         description: 'Les dernières inédits'
     },
     {
         src: '/asset/diaporama/imageSlide18.png',
         alt: 'Les dernières indispensables',
         description: 'Les dernières',
     }*/
];
function ImageDiaporama() {
    // code liste d'images avec scroll

    return (
        <div className="scroll-container">

                {images.map((image, index) => (
                    <div key={index} className="scroll-item">
                        <img src={image.src} alt={image.alt} />
                        <p className="description">{image.description}</p>
                    </div>

                ))}
        </div>

    );


}
export default ImageDiaporama;