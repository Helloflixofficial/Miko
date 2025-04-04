// "use client";
import { trpc } from "@/trpc/server";
export default async function Home() {
  const data = await trpc.hello({ text: "Boby" });
  return (
    <>
      <p className="text-xl font-semibold tracking-tight">
        Firetube Content: {data.greeting}
      </p>
    </>
  );
}
