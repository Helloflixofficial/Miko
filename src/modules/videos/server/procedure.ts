// this procedure is for videos 
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { db } from "@/db";
import { videos } from "@/db/schema";

export const videosRouter = createTRPCRouter({
    create: protectedProcedure.mutation(async ({ ctx }) => {
        const { id: userId } = ctx.user;



        // throw new Error("Opps")
        const [video] = await db
            .insert(videos)
            .values({
                userId,
                title: "Untitled"
            })
            .returning();



        return {
            video: video,
        }
    })
})