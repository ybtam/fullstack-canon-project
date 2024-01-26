import {Query, Resolver} from "type-graphql";

@Resolver()
export class TestQueryResolver {
  @Query(() => String)
  public testQuery(): string {
    return "Hello World!";
  }
}
