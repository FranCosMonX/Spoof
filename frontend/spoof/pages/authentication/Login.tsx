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
import axios from 'axios';

const defaultTheme = createTheme();

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });
  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_API_URL;
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(url + '/auth/signin', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if ([200, 201].includes(response.status)) {
        const token = response.data.accesss_token;
        const user = response.data.user_id
        if (token) {
          sessionStorage.setItem('bearerToken', token);
          sessionStorage.setItem('user', user);
          enqueueSnackbar('Login realizado com sucesso!', { variant: 'success' });
          router.push('/');
        } else {
          enqueueSnackbar('Token não encontrado na resposta.', { variant: 'error' });
        }
      } else if ([400, 401].includes(response.status)) {
        enqueueSnackbar(`Erro: ${response.data.message}`, { variant: 'error' });
      } else {
        enqueueSnackbar('Ocorreu um erro ao logar.', { variant: 'error' });
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
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="senha"
              label="Senha"
              type="password"
              id="senha"
              autoComplete="current-password"
              value={formData.senha}
              onChange={handleChange}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembre-me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            <Grid container justifyContent="flex-end">
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="Cadastro" variant="body2">
                  {"Não possui uma conta? Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}