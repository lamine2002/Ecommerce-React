import useProduct from "./useProduct.jsx";
import {CircularProgress, Stack} from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {NavigateNext} from "@mui/icons-material";
import * as React from "react";
import NewArrival from "./NewArrival.jsx";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

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
    if (loading) return <CircularProgress />;

  return (
      <Grid container spacing={2} alignItems={'center'} mt={2} > {/* Ajoutez justifyContent="center" ici */}
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 2 }}>
              <Item elevation={0}>
                  <Stack
                      spacing={2}
                      direction="column"
                      sx={{ mt: 10, textAlign: 'center' }}  // Ajustez le style pour le centrage sur les petits écrans
                  >
                        {/* Vos éléments restent inchangés */}
                        <Typography variant="h4" component="h1" gutterBottom color={'#64b5f6'}>
                            {product.title}
                        </Typography>
                        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#3b3b3b' }}>
                            {product.price}  FCFA
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ pl: 10, pr: 10, textAlign: 'center' }}>
                            {product.description}
                        </Typography>

                  </Stack>
              </Item>
          </Grid>

          <Grid item xs={12} sm={6} order={{ xs: 1, sm: 1 }}>
              <Item elevation={0} >
                  <img src={product.image} style={{width: '45em', height: "40em"}}/>

              </Item>
          </Grid>
      </Grid>

  );

}

export default ProductDetails;