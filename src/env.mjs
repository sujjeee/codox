import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        CLERK_SECRET_KEY: z.string(),
    },

    client: {
        NEXT_PUBLIC_TMDB_API_KEY: z.string(),
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string()
    },
    runtimeEnv: {
        NEXT_PUBLIC_TMDB_API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
        CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    },
})