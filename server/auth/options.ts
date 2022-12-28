import { NextAuthOptions } from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0'

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTHOK_CLIENT_ID,
      clientSecret: process.env.AUTHOK_CLIENT_SECRET,
      issuer: process.env.AUTHOK_ISSUER_BASE_URL,
    })
  ],
  session: {
    strategy: 'jwt',
  },
  /*
  pages: {
    signIn: '/auth/sign-in',
    newUser: '/auth/welcome?isNewUser=true', // New users will be directed here on first sign in
    error: '/auth/sign-in', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request',
  },
  */
  callbacks: {
    /**
     * @param token Decrypted JSON Web Token
     * @param user User object (only available on sign in)
     * @param account Provider account (only available on sign in)
     * @param profile Provider profile (only available on sign in)
     * @return JSON Web Token that will be saved
     */
    async jwt({ token /* user  account, profile */ }) {
      // TODO: Ask user to fill these fields, don't fill them automatically
      //if (user) {
      // await fillUserFields(
      //   user as any,
      //   profile as any,
      //   account?.provider as any,
      // );
      //}
      return {
        ...token,
      };
    },
    async session({ session, token }) {
      console.log('callback session');
      return session;
    },
    // Link multiple accounts https://github.com/nextauthjs/next-auth/issues/296
    async signIn({ account, profile }) {
      console.log('callback signIn');
      return true;
    },
  },
  events: {
    async createUser({ user }) {
      console.log('createUser');
    },
  },
  debug: true,
};
