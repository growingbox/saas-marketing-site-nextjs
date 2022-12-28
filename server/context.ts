import { type inferAsyncReturnType } from '@trpc/server';
import { type CreateNextContextOptions } from '@trpc/server/adapters/next';
// import { type Session, unstable_getServerSession } from 'next-auth';
// import { nextAuthOptions } from './auth/options';

import { getSession, Session } from "@authok/nextjs-authok";


type CreateContextOptions = {
  session: Session | null;
};

/** Use this helper for:
 * - testing, so we dont have to mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://create.t3.gg/en/usage/trpc#-servertrpccontextts
 **/
export const createContextInner = (opts: CreateContextOptions) => {
  return {
    session: opts.session,
  };
};

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;

  // 如果使用 next-auth 则调用此方法
  // const session = await unstable_getServerSession(req, res, nextAuthOptions);

  const session = await getSession(req, res);
  if (session) {
    // TODO 可以根据 authok 的 用户信息 去进一步 获取 应用本身的 用户信息
  }

  return {
    ...createContextInner({
      session,
    }),
    ...opts,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
