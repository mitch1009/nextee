import { gql } from "@apollo/client";
import { getClient } from "@/lib";

export const helloRequest = gql`
 query Query($name: String="Apollo Graphql") { hello(name: $name) }
`

export const getHelloData = async ()=>  await getClient().query({
    query: helloRequest,
    context: {
      fetchOptions: {
        next: { revalidate: 60 }
      }
    },
    variables: {
      name: "Apollo Graphql"
    }
  })