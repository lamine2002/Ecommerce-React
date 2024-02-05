import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NewArrival from "./NewArrival.jsx";

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
            <Grid container spacing={2} >
                <Grid item xs={6} >
                    <Item elevation={0}></Item>
                </Grid>
                <Grid item xs={6}  justifyContent={"end"}>
                    <Item elevation={0} >
                        <NewArrival />
                    </Item>
                </Grid>
            </Grid>
        </>
    );
}
export default NewArrivalContainer;