import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Faceit from "next-auth/providers/faceit";
import CredentialsProvider from "next-auth/providers/credentials";

const credentialsConfig = CredentialsProvider({
  name: "Credentials",
  credentials: {
    username: {
      label: "User Name",
    },
    password: {
      label: "Password",
      type: "password",
    },
  },
  async authorize(credentials) {
    if (credentials.username === "shadi" && credentials.password === "123")
      return {
        name: "shadi",
      };
    else return null;
  },
});
const config = {
  providers: [Faceit, credentialsConfig],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === "/middlewareProtected") return !!auth;
      return true;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
