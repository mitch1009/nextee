import ActionsPage from "@/components/Hello/ActionsPage";
import {GraphqlPage} from "@/components/Hello/GraphqlPage";
import {TrpcPage} from "@/components/Hello/TrpcPage";
import { HomePage } from "@/components/Home";
export default async function Home() {
  const helloData= await fetch(`http://localhost:7766/api/graphql`,{
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST', 
    body: JSON.stringify({query: `
    query Query($name: String="Apollo Graphql") { hello(name: $name) }
    `})
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-center mx-auto max-w-7xl ">
      <HomePage  >
        <div className="">
          <ActionsPage key={1} />
          <GraphqlPage key={2} data={await helloData.json()} />
          <TrpcPage/>
        </div>

      </HomePage>
    </main>
  );
}
