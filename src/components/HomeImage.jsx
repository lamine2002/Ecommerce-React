import Container from "@mui/material/Container";
import * as React from "react";
import Typography from "@mui/material/Typography";

function HomeImage() {
    return(
        <>
            <Typography sx={{display: { xs: 'none', md: 'flex' }}} >
                <div style={{width: "100%", height: "650px", backgroundImage: "url(../public/asset/image5.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                    {/*<div style={{width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <h1 style={{color: "white", fontSize: "3em", fontWeight: "bold", letterSpacing: ".1em"}}>Bienvenue sur IT.SN ~Vente</h1>
                    </div>*/}
                </div>
            </Typography>
            <Container sx={{display: { xs: 'flex', md: 'none' }}}>
                <video style={{width:"100%", height:"100%"}} autoPlay loop muted>
                    <source src="../public/asset/diaporama/slideVideo.mp4" type="video/mp4" />
                </video>
            </Container>
        </>
    )
}

export default HomeImage;