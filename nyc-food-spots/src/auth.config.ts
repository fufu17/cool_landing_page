import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

// This is a demo configuration - in production, you'd validate against a database
const users = [
  {
    id: "1",
    email: "demo@example.com",
    password: "$2a$10$X8qJ8vWqJZQZ9Z9Z9Z9Z9.Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9", // "password"
    name: "Demo User",
  },
]

export default {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = users.find((user) => user.email === credentials.email)

        if (!user) {
          return null
        }

        const passwordsMatch = await bcrypt.compare(
          credentials.password as string,
          user.password
        )

        if (!passwordsMatch) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
} satisfies NextAuthConfig
