import {useEffect, useState} from "react";

const useImage = () => {
    const [images, setImages] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products', )
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((response) => setImages(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    const otherImages = [
        {
            id:21,
            title:'Chaussure Adidas 1',
            price:'200',
            category:'Chaussure',
            description:'Chaussure Adidas 1',
            image:'../public/asset/chaussureAdidas1.png'
        },
        {
            id:22,
            title:'Chaussure Adidas 2',
            price:'200',
            category:'Chaussure',
            description:'Chaussure Adidas 2',
            image:'../public/asset/chaussureAdidas2.png'
        },
        {
            id:23,
            title:'Chaussure Adidas 3',
            price:'200',
            category:'Chaussure',
            description:'Chaussure Adidas 3',
            image:'../public/asset/chaussureAdidas3.png'
        },
        {
            id:24,
            title:'Chaussure Adidas 4',
            price:'200',
            category:'Chaussure',
            description:'Chaussure Adidas 4',
            image:'../public/asset/chaussureAdidas4.png'
        },
        {
            id:25,
            title:'Chaussure Adidas 5',
            price:'200',
            category:'Chaussure',
            description:'Chaussure Adidas 5',
            image:'../public/asset/chaussureAdidas5.png'
        },
        {
            id:26,
            title:'Chaussure Adidas 6',
            price:'200',
            category:'Chaussure',
            description:'Chaussure Adidas 6',
            image:'../public/asset/chaussureAdidas6.png'
        },
        {
            id:27,
            title:'Chaussure Adidas 7',
            price:'200',
            category:'Chaussure',
            description:'Chaussure Adidas 7',
            image:'../public/asset/chaussureAdidas7.png'
        },
        {
            id:28,
            title:'Chaussure Nike 1',
            price:'300',
            category:'Chaussure',
            description:'Chaussure Nike 1',
            image:'../public/asset/chaussureNike1.jpg'
        },
        {
            id:29,
            title:'Chaussure Nike 2',
            price:'300',
            category:'Chaussure',
            description:'Chaussure Nike 2',
            image:'../public/asset/chaussureNike2.jpg'
        },
        {
            id:30,
            title:'Chaussure Nike 3',
            price:'300',
            category:'Chaussure',
            description:'Chaussure Nike 3',
            image:'../public/asset/chaussureNike3.jpg'
        },
        {
            id:31,
            title:'Chaussure Nike 4',
            price:'300',
            category:'Chaussure',
            description:'Chaussure Nike 4',
            image:'../public/asset/chaussureNike4.jpg'
        },
        {
            id:32,
            title:'Chaussure Nike 5',
            price:'300',
            category:'Chaussure',
            description:'Chaussure Nike 5',
            image:'../public/asset/chaussureNike5.jpg'
        },
        {
            id:33,
            title:'Chaussure Nike 6',
            price:'300',
            category:'Chaussure',
            description:'Chaussure Nike 6',
            image:'../public/asset/chaussureNike6.jpg'
        },
        {
            id:34,
            title:'Chaussure Nike 7',
            price:'300',
            category:'Chaussure',
            description:'Chaussure Nike 7',
            image:'../public/asset/chaussureNike7.jpg'
        },
        {
            id:35,
            title:'Chaussure Nike 8',
            price:'300',
            category:'Chaussure',
            description:'Chaussure Nike 8',
            image:'../public/asset/chaussureNike8.jpg'
        },
        {
            id:36,
            title:'Chaussure Nike 9',
            price:'300',
            category:'Chaussure',
            description:'Chaussure Nike 9',
            image:'../public/asset/chaussureNike9.jpg'
        },

    ]
    const combinedImages = images ? [...images, ...otherImages] : otherImages;
    return { images: combinedImages, error, loading };
    // console.log(images);
};

export default useImage;