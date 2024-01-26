import {buildSchema} from "type-graphql";
import {TestQueryResolver} from "@graphql/test/resolvers/query-resolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [ TestQueryResolver ],
  })
}
