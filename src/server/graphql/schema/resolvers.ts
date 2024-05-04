import { HelloMutation, HelloQueries } from "../modules";

export const resolvers ={
    Query : {
        ...HelloQueries
    },
    Mutation : {
        ...HelloMutation
    }
}