import "reflect-metadata";
import {createServer} from "@/utils/create-server";
import { buildHTTPExecutor } from "@graphql-tools/executor-http";

export const createExecutor = async () => {
  const yoga = await createServer()

  return buildHTTPExecutor({
    endpoint: 'http://localhost:4000/graphql',
    fetch: yoga.fetch,
  })
}
