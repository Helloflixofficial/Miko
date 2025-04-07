import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
export const appRouter = createTRPCRouter({
    hello: baseProcedure
        .input(
            z.object({
                text: z.string(),
            }),
        )
        .query((opts) => {
            console.log({ fromContext: opts.ctx.clerkUserId });


            return {
                greeting: `Hello: ${opts.input.text}`,
            };
        }),
});
export type AppRouter = typeof appRouter;