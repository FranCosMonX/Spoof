import { Box, PaletteMode } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';
import Features from '../Components/Features';
import Feed from '../Components/Feed';

export default function LandingPage() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const defaultTheme = createTheme({ palette: { mode } });
  const [logged, setLogged] = React.useState(false);

  React.useEffect(() => {
    const token = sessionStorage.getItem('bearerToken');
    if (token) {
      setLogged(true);
    }
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ bgcolor: 'background.default' }}>
          {
            logged ?
            <Feed/>
            :
            <Features />
          }
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
