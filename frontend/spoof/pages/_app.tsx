import React from 'react';
import { SnackbarProvider } from 'notistack';
import { useRouter } from 'next/router';
import UserMenu from '../Components/UserMenu';

function App(props: { Component: any; pageProps: any; }) {
  const { Component, pageProps } = props;
  const router = useRouter();

  // Verifica se a rota atual começa com '/authentication'
  const isNoMenuRoute = router.pathname.startsWith('/authentication');

  if (isNoMenuRoute) {
    return (
      <SnackbarProvider maxSnack={3}>
        <Component {...pageProps} />
      </SnackbarProvider>
    );
  }

  return (
    <SnackbarProvider maxSnack={3}>
      <UserMenu />
      <Component {...pageProps} />
    </SnackbarProvider>
  );
}

export default App;
