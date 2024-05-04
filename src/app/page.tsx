import ActionsPage from "@/components/Hello/ActionsPage";
import {GraphqlPage} from "@/components/Hello/GraphqlPage";
import {TrpcPage} from "@/components/Hello/TrpcPage";
import { HomePage } from "@/components/Home";
import { getClient } from "@/lib";
import { helloRequest } from "@/server/graphql/modules";
export default async function Home() {
  const {data} = await getClient().query({
    query: helloRequest,
    variables: {
      name: "Apollo Graphql"
    }
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-center mx-auto max-w-7xl ">
      <HomePage  >
        <div className="">
          <ActionsPage key={1} />
          <GraphqlPage key={2} data={data} />
          <TrpcPage/>
        </div>

      </HomePage>
    </main>
  );
}
