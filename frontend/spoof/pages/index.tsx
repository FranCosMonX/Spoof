import * as React from 'react';
import { Avatar, Box, Button, Grid, IconButton, Menu, MenuItem, Tooltip, ListItemIcon, ToggleButtonGroup, ToggleButton, PaletteMode } from '@mui/material';
import { Settings, Logout } from '@mui/icons-material';
import { useRouter } from "next/router";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import getLPTheme from './getLPTheme';

export default function LandingPage() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [logged, setLogged] = React.useState(false);
  const open = Boolean(anchorEl);
  const url = process.env.NEXT_PUBLIC_API_URL;
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [mode, setMode] = React.useState<PaletteMode>('light');
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const router = useRouter();

  const logout = () => {
    setAnchorEl(null);

    const isCookieSet = document.cookie.split(';').some((item) => item.trim().startsWith('token'))

    if(isCookieSet){
      setLogged(false);
      //Deleta o cookie
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    }
  }

  React.useEffect(() => {
    const isCookieSet = document.cookie.split(';').some((item) => item.trim().startsWith('token'))
  
    if(isCookieSet) setLogged(true);

  }, [])

  return (
    <React.Fragment>
      <Grid container justifyContent="space-between" alignItems="center" sx={{ backgroundColor: 'lightblue', padding: 2 }}>
        <Grid item>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src='/logo-white.png' style={{ width: 100, marginRight: 10 }} />
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            {logged ? (
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }} />
                </IconButton>
              </Tooltip>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Button variant="contained" href="/authentication/Login" sx={{ marginRight: 2 }}>
                  Entrar
                </Button>
                <Button variant="outlined" href="/authentication/Cadastro" sx={{ backgroundColor: 'white' }}>
                  Cadastre-se
                </Button>
              </Box>
            )}
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&::before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> Lucas
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Meu Perfil
            </MenuItem>
            <MenuItem onClick={logout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Sair
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ bgcolor: 'background.default' }}>
          <Features />
          {/* <Divider />
          <Testimonials />
          <Divider />
          <Highlights />
          <Divider />
          <Pricing />
          <Divider />
          <FAQ />
          <Divider />
          <Footer /> */}
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}
