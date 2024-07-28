import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import * as React from 'react';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import axios from 'axios';

const defaultTheme = createTheme();

export default function CadastroUsuario() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    usuario: '',
    telefone: '',
    senha: '',
    senhaAux: '',
  });
  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_API_URL;
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (formData.senha !== formData.senhaAux) {
      enqueueSnackbar('Senhas não coincidem.', { variant: 'error' });
      return;
    }

    try {
      const response = await axios.post(url + '/auth/signup', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if ([200, 201].includes(response.status)) {
        enqueueSnackbar('Cadastro realizado com sucesso!', { variant: 'success' });
        router.push('Login');
      } else if ([400, 401].includes(response.status)) {
        enqueueSnackbar(`Erro: ${response.data.message}`, { variant: 'error' });
      } else {
        enqueueSnackbar('Ocorreu um erro ao cadastrar.', { variant: 'error' });
      }
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        enqueueSnackbar(`Erro: ${error.response.data.message}`, { variant: 'error' });
      } else {
        enqueueSnackbar('Ocorreu um erro ao enviar a requisição.', { variant: 'error' });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Cadastre-se
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
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
                <TextField
                  required
                  fullWidth
                  name="senha"
                  label="Senha"
                  type="password"
                  id="senha"
                  autoComplete="new-password"
                  value={formData.senha}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="senhaAux"
                  label="Repetir senha"
                  type="password"
                  id="senhaAux"
                  autoComplete="off"
                  value={formData.senhaAux}
                  onChange={handleChange}
                  error={(formData.senhaAux.length > 0) && (formData.senha !== formData.senhaAux)}
                  helperText={(formData.senhaAux.length > 0) && (formData.senha !== formData.senhaAux) ? "Senhas não coincidem." : ""}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Cadastrar
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="Login" variant="body2">
                    Já possui uma conta? Faça o login.
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}