'use server'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'
import {apolloClient} from "@/lib/apollo/client";

export const {} = registerApolloClient(() => {
  return apolloClient()
})
