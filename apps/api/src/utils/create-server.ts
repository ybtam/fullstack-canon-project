import { buildSchema } from "type-graphql";
import {TestQueryResolver} from "@graphql/test/resolvers/query-resolver";
import {createYoga} from "graphql-yoga";

export async function createServer() {
  const schema = await buildSchema({
    emitSchemaFile: true,
    resolvers: [TestQueryResolver]
  })

  return createYoga({ schema })
}
