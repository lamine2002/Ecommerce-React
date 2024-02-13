import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NewArrival from "./NewArrival.jsx";
import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {NavigateNext} from "@mui/icons-material";
import Container from "@mui/material/Container";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function NewArrivalContainer() {
    return (
        <>
            <Grid container spacing={2} sx={{display: { xs: 'none', md: 'flex' }}}>
                <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }} >
                    <Item elevation={0}>
                        <Stack
                            spacing={2}
                            direction="column"
                            sx={{ mt: 10, textAlign: 'center' }}  // Ajustez le style pour le centrage sur les petits écrans
                        >
                            {/* Vos éléments restent inchangés */}
                            <Typography variant="h5" component="div" gutterBottom color={'#64b5f6'}>
                                Notre nouvelle collection inédite
                            </Typography>
                            <Typography variant="h1" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#3b3b3b' }}>
                                Tous vos  <br/> besoins sur
                                <div style={{ color: '#64b5f6', letterSpacing: '.1em', fontSize: '0.7em' }}>
                                    IT<span style={{ color: '#1976d2' }}>.</span>SN <span style={{ color: '#1976d2' }}>~</span>Vente
                                </div>
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ pl: 10, pr: 10, textAlign: 'center' }}>
                                Découvrez nos arrivées de produits élégants, un confort de qualité et de l'innovation pour votre vie active.
                            </Typography>
                            <Typography>
                                <Button
                                    variant="contained"
                                    endIcon={<NavigateNext sx={{ backgroundColor: '#fff', color: '#64b5f6', borderRadius: 10 }} />}
                                    sx={{ width: '40%', height: '3em', fontSize: '1em', mt: 2, borderRadius: 5, backgroundColor: '#64b5f6' }}
                                >
                                    Voir maintenant
                                </Button>
                            </Typography>
                        </Stack>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }} justifyContent="center">
                    <Item elevation={0} >
                        <NewArrival />
                    </Item>
                </Grid>
            </Grid>
        </>
    );
}
export default NewArrivalContainer;