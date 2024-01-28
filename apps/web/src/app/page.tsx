import {getClient} from "@/lib/apollo/server-client";
import {graphql} from "codegen-web";

export default async function Home() {
  const { data } = await getClient().query({
    query: graphql(`
      query TestQuery {
        testQuery
      }
    `),
  });

  return (
    <>
      <p>{data.testQuery}</p>
    </>
  );
}
