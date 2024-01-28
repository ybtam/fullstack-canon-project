import 'reflect-metadata';

import {test, expect, beforeAll} from "vitest"
import {graphql} from "codegen-api";
import {assertSingleValue} from "test/utils/assert-result";
import {createExecutor} from "test/utils/executor";
import { AsyncExecutor } from '@graphql-tools/utils';

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
