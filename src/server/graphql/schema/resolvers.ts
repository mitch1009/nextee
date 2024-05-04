import { HelloMutations, HelloQueries } from "../modules";

export const resolvers ={
    Query : {
        ...HelloQueries
    },
    Mutation : {
        ...HelloMutations
    }
}