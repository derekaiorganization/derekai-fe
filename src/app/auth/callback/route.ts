// app/auth/callback/route.ts
// This is a Next route handler (server-only). It reads the `code` returned by the provider
// and uses Supabase server helper to exchange the code for a session (PKCE flow).
import { NextResponse } from "next/server";
import { createServerSupabase } from "@/lib/supabase/server";

export async function GET(req: Request) {
    const url = new URL(req.url);
    const code = url.searchParams.get("code");
    const error = url.searchParams.get("error_description") || url.searchParams.get("error");

    // If the provider returned an error, redirect back to login with the error message
    if (error) {
        const to = new URL("/login", req.url);
        to.searchParams.set("error", error);
        return NextResponse.redirect(to);
    }

    if (!code) {
        // No code -> redirect to login
        return NextResponse.redirect(new URL("/login", req.url));
    }

    // createServerSupabase uses cookie wrapper so the session created will be written as cookies
    const supabase = await createServerSupabase();

    // Exchange the code for a session and set cookies for the browser
    const { data, error: exError } = await supabase.auth.exchangeCodeForSession(code);

    if (exError) {
        // If exchange fails, you can log and redirect to login
        console.error("exchangeCodeForSession error", exError);
        const to = new URL("/", req.url);
        to.searchParams.set("error", exError.message);
        return NextResponse.redirect(to);
    }

    // Success: redirect to the app home / dashboard
    // console.log("OAuth login success", data);
    return NextResponse.redirect(new URL("/", req.url));
}
