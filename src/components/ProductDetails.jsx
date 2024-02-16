import useProduct from "./useProduct.jsx";

function ProductDetails({id}) {
    const {product, error, loading} = useProduct(id);
    if (error) return <p>Une erreur de réseau a été rencontrée</p>;
    if (loading) return <p>Chargement...</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
        <img src={product.image} alt={product.name} />
    </div>
  );

}

export default ProductDetails;