// src/lib/supabase/server.ts
// Server helper that creates a Supabase client bound to the current request's cookies.
// This is used in Next route handlers and Server Components that need the user's session.

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Creates a request-scoped Supabase client (server-side).
 * The wrapper uses Next's cookies so the Supabase auth helpers can read/write auth cookies.
 */
export async function createServerSupabase() {
    // Next's cookies() returns a CookieStore - we adapt it to the shape createServerClient expects
    const cookieStore = await cookies();

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
            cookies: {
                // Return cookie objects (name, value, options) when server helper asks them
                getAll: () => {
                    // next/headers cookie objects have .name and .value
                    return cookieStore.getAll().map((c) => ({ name: c.name, value: c.value }));
                },
                // createServerClient will give us cookies to set (on OAuth exchange). We set them here.
                setAll: (cookiesToSet: Array<{ name: string; value: string; options?: Record<string, unknown> }>) => {
                    cookiesToSet.forEach((c) => {
                        // options may include path, maxAge, sameSite, etc.
                        cookieStore.set(c.name, c.value, c.options || {});
                    });
                },
            },
        }
    );
}
