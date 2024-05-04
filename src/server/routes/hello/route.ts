import { procedure, router } from "@/server/trpc";
import { HelloService } from "./service";
import { z } from "zod";
export const helloRoute = router({
    hello: procedure.input(z.object({name: z.string()})).query(({input}) => {
        console.log(input)
        return HelloService.hello(input)
    })
})