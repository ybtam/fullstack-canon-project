import { AsyncExecutor } from '@graphql-tools/utils';
import {graphql} from "codegen-api";
import 'reflect-metadata';
import {assertSingleValue} from "test/utils/assert-result";
import {createExecutor} from "test/utils/executor";
import {beforeAll, expect, test} from "vitest"

let executor: AsyncExecutor;

beforeAll(async () => {
  executor = await createExecutor()
})


test("testQuery should return 'Hello World!'", async () => {
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
