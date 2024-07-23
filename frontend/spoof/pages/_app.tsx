import React from 'react';
import { SnackbarProvider } from 'notistack'


function App(props: { Component: any; pageProps: any; }) {
	const { Component, pageProps } = props;
	return (
		<SnackbarProvider maxSnack={3}>
			<Component {...pageProps} />
		</SnackbarProvider>
	)
}

export default App