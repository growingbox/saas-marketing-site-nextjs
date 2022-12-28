import { router } from '../trpc-server';
import { customerRouter } from './customer';

export const appRouter = router({
  customer: customerRouter,
});

export type AppRouter = typeof appRouter;