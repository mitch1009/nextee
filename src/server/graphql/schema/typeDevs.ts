import { gql } from  'graphql-tag'
export  const  typeDefs  =  gql`
    type  Query {
        hello(name: String): String
    }
    type Mutation {
        hello(name: String): String
    }
    `