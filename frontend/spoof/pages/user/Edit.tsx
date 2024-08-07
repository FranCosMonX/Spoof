import { useEffect, useState } from "react";
import { Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import InputMask from 'react-input-mask';

const defaultTheme = createTheme();

export default function Edit(){
  const [formData, setFormData] = useState({
    nome: '',
    usuario: '',
    telefone: '',
  });

  const [sensitiveData, setSensitiveData] = useState({
    email: '',
    senha: ''
  });

  const [visible, setVisible] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    //recuperar as informacoes do usuario
    //preencher nos campos
  }, [])

    return(
      <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

  
        <Typography component="h1" variant="h5" sx={{ marginTop: 5 }}>
            Editar Perfil
          </Typography>

          <Box component="form" noValidate onSubmit={() => {}} sx={{ mt: 3 }}>
          <Grid container spacing={2}>

          <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="nome"
                  required
                  fullWidth
                  id="nome"
                  label="Nome"
                  autoFocus
                  value={formData.nome}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="usuario"
                  label="Usuário"
                  name="usuario"
                  autoComplete="username"
                  value={formData.usuario}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <InputMask
                  mask="(99) 99999-9999"
                  value={formData.telefone}
                  onChange={handleChange}
                >
                  <TextField
                    required
                    fullWidth
                    id="telefone"
                    label="Telefone"
                    name="telefone"
                    autoComplete="tel"
                    type="tel"
                  />
                </InputMask>
              </Grid>

              <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Salvar Perfil
              </Button>
              </Grid>
            
            </Grid>
            </Box>

            <Box component="form" noValidate onSubmit={() => {}} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>

              {
                visible ? (
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={(e) => {
                      e.preventDefault()
                      setVisible(false)}
                    }
                  >
                    Ocultar
                  </Button>
                ) : (
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={(e) => {
                      e.preventDefault()
                      setVisible(true)}
                    }
                  >
                    Editar credenciais
                  </Button>

                )
              }

              </Grid>

              {
                visible && (
                  <>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        value={sensitiveData.email}
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="senha"
                        label="Senha"
                        type="password"
                        id="senha"
                        autoComplete="new-password"
                        value={sensitiveData.senha}
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
                      Salvar credenciais
                    </Button>
                    </Grid>
                  </>
                )
              }
              </Grid>
              </Box>
        </Container>
        </ThemeProvider>
    )
}