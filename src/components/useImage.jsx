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

    return { images, error, loading };
    // console.log(images);
};

export default useImage;