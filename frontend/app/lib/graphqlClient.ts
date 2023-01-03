import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import nookies from 'nookies'

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient(ctx: { req: any }) {
  const httpLink = createHttpLink({
    uri:  `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  });

  const authLink = setContext((req, { headers }) => {
    const accessToken = nookies.get(ctx).accessToken; // JWT取り出し
    return {
      headers: {
        ...headers,
        authorization: accessToken ? `Bearer ${accessToken}` : "" // Headerに埋め込み
      },
    };
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    credentials: 'include',
    defaultOptions: {
      watchQuery: {
        fetchPolicy : 'cache-and-network'
      }
    }
  });
}

export function initializeApollo(initialState = null, ctx) {
  const _apolloClient = apolloClient ?? createApolloClient(ctx); //このctxにcookie情報が含まれる

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  return _apolloClient;
}
