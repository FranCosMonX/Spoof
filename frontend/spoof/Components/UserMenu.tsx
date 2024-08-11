import { Logout, Settings } from '@mui/icons-material';
import { Avatar, Box, Button, Grid, IconButton, ListItemIcon, Menu, MenuItem, Link, Tooltip } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useRouter } from "next/router";
import * as React from 'react';
import { useSnackbar } from 'notistack';

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [logged, setLogged] = React.useState(false);
  const open = Boolean(anchorEl);
  const url = process.env.NEXT_PUBLIC_API_URL;
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const router = useRouter();

  const logout = () => {
    setAnchorEl(null);

    if (logged) {
      setLogged(false);
      enqueueSnackbar('Deslogado com sucesso!', { variant: 'success' });
      sessionStorage.removeItem('bearerToken');
    }
  }

  React.useEffect(() => {
    const token = sessionStorage.getItem('bearerToken');
    if (token) {
      setLogged(true);
    }
  }, []);

  return (
    <React.Fragment>
      <Grid container justifyContent="space-between" alignItems="center" sx={{ backgroundColor: 'lightblue', padding: 2 }}>
        <Grid item>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/">
                <img src='/logo-white.png' style={{ width: 100, marginRight: 10 }} alt="Logo" />
            </Link>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            {logged ? (
              <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Button variant="contained" startIcon={ <Add /> } href="/posts/new">
                  Novo Post
                </Button>

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
              </Box>
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
              <Avatar /> Perfil
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
    </React.Fragment>
    );
}