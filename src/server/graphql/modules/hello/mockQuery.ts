import { gql } from "@apollo/client";
export const helloRequest = gql`
 query Query($name: String="Apollo Graphql") { hello(name: $name) }
`