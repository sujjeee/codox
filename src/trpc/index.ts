import { privateProcedure, publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';
import { db } from '@/db';
import { currentUser } from "@clerk/nextjs";

export const appRouter = router({
    testroute: publicProcedure.query(() => 'Say this is test route!'),

    authCallback: publicProcedure.query(async () => {
        const user = await currentUser();

        if (!user?.id) throw new TRPCError({ code: 'UNAUTHORIZED' })

        const dbUser = await db.user.findFirst({
            where: {
                id: user.id
            }
        })

        if (!dbUser) {
            await db.user.create({
                data: {
                    id: user.id,
                    email: user.emailAddresses[0].emailAddress,
                    image: user.imageUrl,
                    username: user.username || null,
                    fullname: `${user.firstName} ${user.lastName}`
                }
            })
        }
        return { success: true }
    }),

    getUser: privateProcedure.query(async ({ ctx }) => {
        const { userId } = ctx;
        const profiles = await db.user.findMany({
            where: { id: userId },
            select: {
                id: true,
                fullname: true
            }
        })
        return profiles
    }),

    countUser: publicProcedure.query(async () => {
        const totalUsers = await db.user.count();
        return totalUsers
    }),

});

export type AppRouter = typeof appRouter;