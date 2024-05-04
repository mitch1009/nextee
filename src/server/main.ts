
import { helloRoute } from './routes';
import {  router } from './trpc'

export const appRouter = router({
    hello: helloRoute
})

export type AppRouter = typeof appRouter;