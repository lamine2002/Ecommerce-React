import {useState} from "react";

const items = [];
let itemInCart = items.length;
function addToCart(product) {
    if (!items.includes(product))
    {
        // ajouter un compteur pour chaque produit nouvellement ajouté
        product.count = 1;

        items.push(product);

        itemInCart = items.length;

        // apres ajout augmenter le count
    }else {
        alert('Product already in cart');
        // augmenter le compteur de 1
        items.find(item => item.id === product.id).count += 1;
    }
    console.log(items);
}

export default addToCart;
export {items, itemInCart};