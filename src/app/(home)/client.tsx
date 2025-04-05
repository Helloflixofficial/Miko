"use client";
import { trpc } from "@/trpc/client";
import React from "react";
export const Client = () => {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "Boby Sharma",
  });
  return <div>{data.greeting}</div>;
};
