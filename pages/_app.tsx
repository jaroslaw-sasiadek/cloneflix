import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<>
			<Head>
				<title>Cloneflix</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
