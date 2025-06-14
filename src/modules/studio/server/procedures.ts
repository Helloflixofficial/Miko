import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { db } from "@/db"
import { videos } from "@/db/schema";
export const studioRouter = createTRPCRouter({
    getMany: protectedProcedure.query(async () => {
        const data = await db
            .select()
            .from(videos)
        return data;
    })
}) 