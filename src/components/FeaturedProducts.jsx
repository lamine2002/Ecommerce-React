import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {Card, CardActions, CardContent, CardMedia} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import '../style/FeaturedProducts.css';

function FeaturedProducts() {
    const cards = [
        {
            title: 'Nike Air Max 270',
            price: '120.000',
            image: '../public/asset/chaussureNike8.jpg',
            description: 'Chaussure de sport pour homme',
        },
        {
            title: 'Nike Air Max 97',
            price: '100.000',
            image: '../public/asset/chaussureNike4.jpg',
            description: 'Chaussure de sport pour femme',
        },
        {
            title: 'Nike Air Max 720',
            price: '80.000',
            image: '../public/asset/chaussureNike1.jpg',
            description: 'Chaussure de sport pour homme',
        },
        {
            title: 'Nike Air Max 90',
            price: '150.000',
            image: '../public/asset/chaussureNike2.jpg',
            description: 'Chaussure de sport pour femme',
        },
    ]

    // grid de 4 cartes de produits avec titre, image, prix et bouton d'achat avec material-ui
    return (

        <div className="FeaturedProducts">

            {cards.map((card, index) => (
                <div key={index} className="scroll-item">
                    <img src={card.image} alt={card.title} />
                    <h4>{card.title}</h4>
                    <p className="FeaturedProductsDescription">{card.description}</p>
                    <p className={'price'}>{card.price} FCFA</p>
                </div>

            ))}
        </div>

    )
}

export default FeaturedProducts;