import { HelloService } from "@/server/core/hello";
import { IHelloSchema } from "@/server/core/hello/types";
/**
 * Hello Mutation Resolvers
 * @param _ Parent
 * @param args Arguments
 * @returns Object
 */
export const HelloMutations = {
    hello: (_: unknown, args: IHelloSchema) => HelloService.helloMutation(args)
}