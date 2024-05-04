import { procedure, router } from "@/server/trpc/trpc";
import { HelloSchema, HelloService } from "@/server/core/hello";
export const helloRoute = router({
    hello: procedure.input(HelloSchema).query(({input}) => {
        return HelloService.hello(input)
    })
})