import useProduct from "./useProduct.jsx";
import {CircularProgress, Stack} from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {AddShoppingCart, ArrowBack, NavigateNext} from "@mui/icons-material";
import * as React from "react";
import NewArrival from "./NewArrival.jsx";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ReactImageMagnify from 'react-image-magnify';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function ProductDetails({id}) {
    const {product, error, loading} = useProduct(id);
    if (error) return <p>Une erreur de réseau a été rencontrée</p>;
    if (loading) return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}><CircularProgress /></div>;

  return (
      <Grid container spacing={2}  p={10} mb={5} > {/* Ajoutez justifyContent="center" ici */}
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 2 }}>
              <Item elevation={0} >
                  <Stack
                      spacing={2}
                      direction="column"
                      sx={{ mt: 5, textAlign: 'left', width: 500, maxWidth:'100%'}}  // Ajustez le style pour le centrage sur les petits écrans
                  >
                        {/* Vos éléments restent inchangés */}
                        <Typography variant="h4" component="h1" gutterBottom color={'#64b5f6'}>
                            {product.title}
                        </Typography>
                        <Typography variant="h5" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#3b3b3b' }}>
                            {(product.price * 500).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} FCFA
                        </Typography>
                        <Typography variant="h6" component="div" >
                            {product.description}
                        </Typography>

                        <Stack direction="row" spacing={2} justifyContent="flex-start">
                                <Button variant="outlined" color="primary" startIcon={<ArrowBack />}>
                                Retour
                            </Button>
                            <Button variant="contained" color="primary" endIcon={<AddShoppingCart />}>
                                Ajouter au panier
                            </Button>

                        </Stack>

                  </Stack>
              </Item>
          </Grid>

          <Grid item xs={12} sm={6} order={{ xs: 1, sm: 1 }}>
              <Item elevation={0} >
                 <Typography sx={{display: { xs: 'none', md: 'flex' }}}>
                     <div >
                         <ReactImageMagnify {...{
                             smallImage: {
                                 alt: product.title,
                                 isFluidWidth: false,
                                 width: 600,
                                 height: 600,
                                 src: product.image,

                             },

                             largeImage: {
                                 src: product.image,
                                 width: 1200,
                                 height: 1800
                             }
                         }} />
                     </div>
                 </Typography>
                  <Typography sx={{display: { xs: 'flex', md: 'none' }}}>
                      <div style={{ maxWidth: '100%', height: 'auto' }}>
                          <ReactImageMagnify {...{
                              smallImage: {
                                  alt: product.title,
                                  style: { width: '600px', height: '600px' },
                                  isFluidWidth: true,
                                  src: product.image,

                              },
                              largeImage: {
                                  src: product.image,
                                  width: 1200,
                                  height: 1800
                              }
                          }} />
                      </div>
                  </Typography>

              </Item>
          </Grid>
      </Grid>

  );

}

export default ProductDetails;