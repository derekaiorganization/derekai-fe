// src/lib/supabase/browser.ts
// Browser-safe Supabase client. Use this inside "use client" React components.

import { createBrowserClient } from "@supabase/ssr";

export const supabaseBrowser = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
);
