import 'reflect-metadata';

import {test, expect} from "vitest"
import {createServer} from "@/utils/create-server";
import { buildHTTPExecutor } from '@graphql-tools/executor-http'
import {graphql} from "codegen-api";

function assertSingleValue<TValue extends object>(
  value: TValue | AsyncIterable<TValue>
): asserts value is TValue {
  if (Symbol.asyncIterator in value) {
    throw new Error('Expected single value')
  }
}

test("testQuery should return 'Hello World!'", async () => {
  const yoga = await createServer()

  const executor = buildHTTPExecutor({
    endpoint: 'http://localhost:4000/graphql',
    fetch: yoga.fetch,
  })

  const result  = await executor({
    document: graphql(`
    query TestQuery {
      testQuery
    }
    `)
  })

  assertSingleValue(result)

  expect(result).toMatchObject({
    data: {
      testQuery: "Hello World!"
    }
  })
})
