import { Box, PaletteMode } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';
import Features from '../Components/Features';

export default function LandingPage() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const defaultTheme = createTheme({ palette: { mode } });

  return (
    <React.Fragment>
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
