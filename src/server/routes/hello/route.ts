import { procedure, router } from "@/server/trpc";
import { HelloService } from "./service";

export const helloRoute = router({
    hello: procedure.query(() => {
        return HelloService.hello()
    })
})