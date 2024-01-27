import "reflect-metadata";
import {buildSchema} from "type-graphql";
import {TestQueryResolver} from "@graphql/test/resolvers/query-resolver";
import {createYoga} from "graphql-yoga";
import * as bun from "bun";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [ TestQueryResolver ],
  })

  // Create a Yoga instance with a GraphQL schema.
  const yoga = createYoga({ schema })

  const server = bun.serve({
    fetch: yoga,
    port: 4000,
  });

  console.info(
    `Server is running on ${new URL(
      yoga.graphqlEndpoint,
      `http://${server.hostname}:${server.port}`
    )}`
  )
}

bootstrap()
