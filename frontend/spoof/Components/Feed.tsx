import { Container, Grid, Typography } from "@mui/material";

export default function Feed(){
    return(
        <Container id="feed" sx={{ py: { xs: 8, sm: 16 } }}>
        <Grid container spacing={6}>
        <Typography component="h2" variant="h4" color="text.primary">
            Meus Posts
        </Typography>
        </Grid>
        </Container>
    )
    
}