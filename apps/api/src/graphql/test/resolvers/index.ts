import {TestMutationResolver} from "@graphql/test/resolvers/mutation-resolver";
import {TestQueryResolver} from "@graphql/test/resolvers/query-resolver";

export const testResolvers = [
  TestQueryResolver,
  TestMutationResolver
] as const
