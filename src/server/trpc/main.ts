import { router } from "./trpc";
import { helloRoute } from "./routes/hello";

export const appRouter = router({
    main: helloRoute,
})

export type AppRouter = typeof appRouter;