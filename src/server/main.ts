
import { helloRoute } from './routes';
import {  procedure, router } from './trpc'

export const appRouter = router({
    main: helloRoute,
    hey: procedure.query(() => 'hello')
})

export type AppRouter = typeof appRouter;