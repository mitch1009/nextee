
import { helloRoute } from './routes';
import {  procedure, router } from './trpc'

export const appRouter = router({
    main: helloRoute,
})

export type AppRouter = typeof appRouter;