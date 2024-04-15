import { useState, useEffect } from "react";

const useCart = () => {
    const [items, setItems] = useState([]);

    // Charger les données du panier à partir de localStorage au chargement de l'application
    useEffect(() => {
        const savedItems = localStorage.getItem('cartItems');
        if (savedItems) {
            setItems(JSON.parse(savedItems));
        }
    }, []);

    const addToCart = (product) => {
        const index = items.findIndex((item) => item.id === product.id);

        if (index === -1) {
            product.count = 1;
            const newItems = [...items, product];
            setItems(newItems);
            localStorage.setItem('cartItems', JSON.stringify(newItems)); // Mettre à jour localStorage
        } else {
            alert('Product already in cart');
            const newItems = [...items];
            newItems[index].count += 1;
            setItems(newItems);
            localStorage.setItem('cartItems', JSON.stringify(newItems)); // Mettre à jour localStorage
        }
    };

    console.log(items);
    return { items, addToCart };
};

export default useCart;