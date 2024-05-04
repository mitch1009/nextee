import { HelloService } from "@/server/core/hello";
import { IHelloSchema } from "@/server/core/hello/types";

export const HelloQueries = {
    hello: (__: unknown, args: IHelloSchema) => HelloService.hello(args)
}