import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export async function updateSession(request) {
  let response = NextResponse.next({ request });

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !publishableKey) {
    console.error(
      "Supabase auth middleware is disabled because required environment variables are missing:",
      [
        !url && "NEXT_PUBLIC_SUPABASE_URL",
        !publishableKey && "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
      ].filter(Boolean).join(", ")
    );
    return response;
  }

  const supabase = createServerClient(
    url,
    publishableKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // This refreshes expired auth tokens and writes updated cookies to the response.
  await supabase.auth.getClaims();
  return response;
}
