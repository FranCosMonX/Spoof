import { useEffect, useState } from "react";
import { Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import InputMask from 'react-input-mask';
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";

const defaultTheme = createTheme();

export default function Edit(){
  const url = process.env.NEXT_PUBLIC_API_URL;
  const userId = sessionStorage.getItem('user');
  const token = sessionStorage.getItem('bearerToken');
  const router = useRouter();

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
  const [novaSenha, setNovaSenha] = useState('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSensitiveDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSensitiveData((prevSensitiveData) => ({
      ...prevSensitiveData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const getUserInfo = async () => {
      await axios.get(url + '/users/' + userId, {
        headers: {
          'Authorization': 'Bearer ' + token 
        }
      })
      .then(response => {
        const data = response.data.user;

        setFormData({
          usuario: data.usuario,
          telefone: data.telefone
        })
      })
      .catch(error => {
        console.error(error)
      })

    }

    getUserInfo()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.usuario === '' || formData.telefone === '') {
      enqueueSnackbar('Nome de usuário e telefone são obrigatórios', { variant: 'error' });
      return;
    }

    if(sensitiveData.senha !== novaSenha){
      enqueueSnackbar('Senhas não coincidem', { variant: 'error' });
      return;
    }

    try{
      await axios.patch(url + '/users/' + userId + '/update/basicData', formData, {
        headers: {
          'Authorization': 'Bearer ' + token 
        }
      });

      if(sensitiveData.email.length !== 0 || sensitiveData.senha.length !== 0){
        await axios.patch(url + '/users/' + userId + '/update/sensitiveData', sensitiveData, {
          headers: {
            'Authorization': 'Bearer ' + token 
          }
        });
      }

      enqueueSnackbar('Perfil salvo', { variant: 'success' });
      router.push('/');

    }catch(error){
      enqueueSnackbar('Não foi possível editar usuário', { variant: 'error' });
    }
  }

    return(
      <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

  
        <Typography component="h1" variant="h5" sx={{ marginTop: 5 }}>
            Editar Perfil
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>


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
            </Grid>
            
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
                        label="Novo email"
                        name="email"
                        autoComplete="email"
                        value={sensitiveData.email}
                        onChange={handleSensitiveDataChange}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="senha"
                        label="Nova senha"
                        type="password"
                        id="senha"
                        autoComplete="new-password"
                        value={sensitiveData.senha}
                        onChange={handleSensitiveDataChange}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="senha"
                        label="Confirmar senha"
                        type="password"
                        id="novasenha"
                        autoComplete="new-password"
                        value={novaSenha}
                        onChange={(e) => setNovaSenha(e.target.value)}
                      />
                    </Grid>
                  </>
                )
              }
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
              </Box>
        </Container>
        </ThemeProvider>
    )
}