import {TestQueryResolver} from "@graphql/test/resolvers/query-resolver";
import {createYoga} from "graphql-yoga";
import { buildSchema } from "type-graphql";

export async function createServer() {
  const schema = await buildSchema({
    emitSchemaFile: true,
    resolvers: [TestQueryResolver]
  })

  return createYoga({ schema })
}
