import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputMask from 'react-input-mask';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';

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
  const { enqueueSnackbar } = useSnackbar();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.senha !== formData.senhaAux) {
      enqueueSnackbar('Senhas não coincidem.', { variant: 'error' });
      return;
    }
  
    // Enviando uma requisição POST para o backend
    fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          enqueueSnackbar('Cadastro realizado com sucesso!', { variant: 'success' });
          router.push('login');
        } else if (response.status === 400) {
          response.json().then(data => {
            enqueueSnackbar(`Erro: ${data.detail}`, { variant: 'error' });
          });
        } else {
          enqueueSnackbar('Ocorreu um erro ao cadastrar.', { variant: 'error' });
        }
      })
      .catch((error) => {
        console.error('Erro ao enviar requisição:', error);
        enqueueSnackbar('Ocorreu um erro ao enviar a requisição.', { variant: 'error' });
      });       
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
                  {() => (
                    <TextField
                      required
                      fullWidth
                      id="telefone"
                      label="Telefone"
                      name="telefone"
                      autoComplete="tel"
                      type="tel"
                    />
                  )}
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
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}