import { AppProps } from 'next/app'
import '../styles/index.css'
import { initializeApollo } from '../lib/graphqlClient'
import { ApolloProvider } from '@apollo/client';

const client = initializeApollo(null, null);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
