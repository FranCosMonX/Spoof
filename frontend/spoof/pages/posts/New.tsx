import { useState } from "react";
import { Box, Button, Container, createTheme, CssBaseline, Grid, styled, TextField, ThemeProvider, Typography } from "@mui/material";
import { CloudUpload } from '@mui/icons-material';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

export default function New(){
    const [formData, setFormData] = useState({
        descricao: ''
      });

    const defaultTheme = createTheme();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };

    return(
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            
            <Typography component="h1" variant="h5" sx={{ marginTop: 5 }}>
                Novo Post
            </Typography>

            <Box component="form" noValidate onSubmit={() => {}} sx={{ my: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUpload />}
                    >
                    Escolher arquivo
                    <VisuallyHiddenInput type="file" />
                </Button>

              </Grid>
            
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="descricao"
                  required
                  fullWidth
                  id="descricao"
                  label="Descrição"
                  autoFocus
                  value={formData.descricao}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Novo Post
                    </Button>
                </Grid>
            </Grid>
            </Box>
        
            </Container>
        </ThemeProvider>
    )
}