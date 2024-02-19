import type {myContext} from "@/utils/create-server";

import {Test} from "@graphql/test/entities/test";
import {Arg, Ctx, Mutation, Resolver} from "type-graphql";

@Resolver(() => Test)
export class TestMutationResolver {
  @Mutation(() => Test)
  async createTest(
    @Arg("name") name: string,
    @Ctx() {em}: myContext
  ) {
    const test = em.create(Test, {name});
    await em.persistAndFlush(test);
    return test;
  }
}
