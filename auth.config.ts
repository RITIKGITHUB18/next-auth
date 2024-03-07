import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";

import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "./data/user";

export default {
  providers: [
    github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLUE_CLIENT_SECRET,
    }),
    credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !password) {
            return null;
          }

          if (user.password) {
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) return user;
          }
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
