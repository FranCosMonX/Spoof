import { Box, PaletteMode, TextField, CircularProgress, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';
import Features from '../Components/Features';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import Feed from '../Components/Feed';
import axios from 'axios';

export default function LandingPage() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const defaultTheme = createTheme({ palette: { mode } });
  const [logged, setLogged] = React.useState(false);
  const [list, setList] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_API_URL;
  const { enqueueSnackbar } = useSnackbar();
  
  const getList = async (term: string = '') => {
    const user = sessionStorage.getItem('user');
    const token = sessionStorage.getItem('bearerToken');
    setLoading(true);
    try {
      const response = await axios.get(url + `/objeto/${user}/${term ? 'search' : 'list'}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        ...(term && { params: { keyword: term } })
      });
      if ([200, 201].includes(response.status)) {
        setList(response.data.data);
      } else if ([400, 401].includes(response.status)) {
        enqueueSnackbar(`Erro: ${response.data.message}`, { variant: 'error' });
      } else {
        enqueueSnackbar('Ocorreu um erro ao carregar a página.', { variant: 'error' });
      }
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        enqueueSnackbar(`Erro: ${error.response.data.message}`, { variant: 'error' });
      } else {
        enqueueSnackbar('Ocorreu um erro ao carregar a página.', { variant: 'error' });
      }
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const token = sessionStorage.getItem('bearerToken');
    if (token) {
      setLogged(true);
      getList();
    }
  }, []);

  React.useEffect(() => {
    if (logged) {
      getList(searchTerm);
    }
  }, [searchTerm]);

  return (
    <React.Fragment>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ bgcolor: 'background.default', p: 2 }}>
          {
            logged ? (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Pesquisar"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  {loading ? (
                    <Box display="flex" justifyContent="center" alignItems="center">
                      <CircularProgress />
                    </Box>
                  ) : (
                    <Feed list={list}/>
                  )}
                </Grid>
              </Grid>
            ) : (
              <Features />
            )
          }
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}
