import OrmConnect from "@/utils/orm-connect";
import {TestQueryResolver} from "@graphql/test/resolvers/query-resolver";
import {createYoga} from "graphql-yoga";
import { buildSchema } from "type-graphql";

export async function createServer() {
  const schema = await buildSchema({
    emitSchemaFile: true,
    resolvers: [TestQueryResolver]
  })

  const orm = await new OrmConnect().connect();

  return createYoga({
    context: async ({ request }) => ({ em:  orm.em.fork(), request}),
    schema
  })
}3
