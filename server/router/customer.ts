import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { router, publicProcedure, protectedProcedure } from '../trpc-server';

export const customerRouter = router({
  fetch: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const result = {};

      return result;
    }),
  list: protectedProcedure
    .input(z.object({ limit: z.number().default(20).optional() }))
    .query(async ({ input }) => {
      const result = [
        {
          name: '客户1',
        }, {
          name: '客户1',
        }
      ];
      
      return result;
    }),
    create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      console.log('创建客户');

      const data = {};
      return data;
    }),
  delete: protectedProcedure
    .input(z.string())
    .mutation(async ({ input, ctx }) => {
      const data = {};

      return data;
    }),
});
