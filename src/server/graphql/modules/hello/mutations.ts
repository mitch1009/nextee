import { HelloService } from "@/server/core/hello";
import { IHelloSchema } from "@/server/core/hello/types";
export const HelloMutations = {
    hello: (_: unknown, args: IHelloSchema) => HelloService.helloMutation(args)
}