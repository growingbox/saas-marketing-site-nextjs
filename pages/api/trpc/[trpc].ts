import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter, createContext } from "../../../server";

export default createNextApiHandler({
  router: appRouter,
  createContext,
  onError: ({ path, error }) => {
    console.error(`❌ tRPC failed on ${path}: ${error}`);
  },
});
