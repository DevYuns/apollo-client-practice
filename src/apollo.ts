import {ApolloClient, InMemoryCache, NormalizedCacheObject, gql} from '@apollo/client';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https:movieql.now.sh"
});

export default client;