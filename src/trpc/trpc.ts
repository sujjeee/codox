import { TRPCError, initTRPC } from '@trpc/server';
import { currentUser } from '@clerk/nextjs';

const t = initTRPC.create();
const middleware = t.middleware

const isAuth = middleware(async (opts) => {
    const user = await currentUser()
    if (!user || !user.id) {
        throw new TRPCError({ code: 'UNAUTHORIZED' })
    }
    return opts.next({
        ctx: {
            userId: user.id,
            user,
        }
    })
})

export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth);