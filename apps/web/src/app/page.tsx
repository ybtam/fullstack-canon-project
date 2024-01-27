import Image from "next/image";
import {getClient} from "@/lib/apollo/server-client";
import {gql} from "@apollo/client";

export default async function Home() {
  const { data } = await getClient().query({
    query: gql`
      query {
        testQuery
      }
    `,
  });

  return (
    <>
      <p>{data.testQuery}</p>
    </>
  );
}
