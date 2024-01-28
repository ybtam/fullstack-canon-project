import {createServer} from "@/utils/create-server";
import * as bun from "bun";
import "reflect-metadata";

async function bootstrap() {
  // Create a Yoga instance with a GraphQL schema.
  const yoga = await createServer()

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
