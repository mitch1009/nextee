import { helloRoute } from "./routes";
import { router } from "./trpc";

export const appRouter = router({
    main: helloRoute,
})

export type AppRouter = typeof appRouter;