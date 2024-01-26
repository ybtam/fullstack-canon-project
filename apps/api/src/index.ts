import {buildSchema} from "type-graphql";
import {TestQueryResolver} from "@graphql/test/resolvers/query-resolver";
import {createYoga} from "graphql-yoga";
import { createServer } from 'node:http'

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [ TestQueryResolver ],
  })

  // Create a Yoga instance with a GraphQL schema.
  const yoga = createYoga({ schema })

// Pass it into a server to hook into request handlers.
  const server = createServer(yoga)

// Start the server and you're done!
  server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
  })
}
