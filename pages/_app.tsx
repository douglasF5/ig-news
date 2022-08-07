import { AppProps } from 'next/app';
import '../src/styles/globals.scss';
import Head from 'next/head';
import { SessionProvider as NextAuthProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<NextAuthProvider session={pageProps.session}>
			<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Component {...pageProps} />
		</NextAuthProvider>
	)
}

export default MyApp
