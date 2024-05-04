/**
 *  tRPC configuration.
 */
import { initTRPC } from "@trpc/server";
import { EventEmitter } from "events";
import superjson from "superjson";

import { createTRPCContext } from "./context";
import { ZodError } from "zod";
/**
 * Initialize the tRPC router
 */
const trpc = initTRPC.context<typeof createTRPCContext>().create({
    transformer: superjson,
    errorFormatter({ shape, error }) {
        return {
            ...shape,
            data: {
                ...shape.data,
                error,
                zodError:
                    error.cause instanceof ZodError ? error.cause.flatten() : null,
            },
        }
    }
})



export const router = trpc.router
// event emitter
export const eventEmitter = new EventEmitter()
// unprotected procedure
export const procedure = trpc.procedure
// protected procedure for auth
export const authProcedure = trpc.procedure.use(({ ctx, next }) => {
    if (!ctx.session || !ctx.session.user) {
        throw new Error("UNAUTHORIZED")
    }
    return next({
        ctx: {
            session: { ...ctx.session, user: ctx.session.user }
        }
    })
})
