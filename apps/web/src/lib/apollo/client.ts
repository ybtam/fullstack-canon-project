import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import {createHttpLink} from "@/lib/apollo/link";

export const apolloClient = (cookie?: RequestCookie) => {
  const token = cookie ? `Bearer ${cookie.value}` : ''

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink(process.env.GRAPHQL_ENDPOINT!, token),
  })
}
