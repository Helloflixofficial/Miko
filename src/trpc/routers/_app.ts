import { z } from 'zod';
import { baseProcedure, createTRPCRouter, protectedProcedure } from '../init';
export const appRouter = createTRPCRouter({
    hello: protectedProcedure
        .input(
            z.object({
                text: z.string(),
            }),
        )
        .query((opts) => {
            console.log({ dbUser: opts.ctx.user });

            return {
                greeting: `Hello: ${opts.input.text}`,
            };
        }),
});
export type AppRouter = typeof appRouter;