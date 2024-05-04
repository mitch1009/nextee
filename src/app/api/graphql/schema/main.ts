import { gql } from  'graphql-tag'
export  const  typeDefs  =  gql`
    type  User {
        id: ID
        login: String
        avatar_url: String
    }

    type  Query {
        getUsers: [User]
        getUser(name: String!): User!
    }`