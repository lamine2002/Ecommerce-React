import useImage from "./useImage.jsx";

function useProduct(id) {
    const { images, error, loading } = useImage();
    const product = images.find((image) => image.id === id);

    return { product, error, loading };

}

export default useProduct;