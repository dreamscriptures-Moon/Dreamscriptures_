import "server-only";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Server Components cannot write cookies. proxy.js refreshes them.
          }
        },
      },
    }
  );
}

class SupabaseRequestError extends Error {
  constructor(message, { status, details } = {}) {
    super(message);
    this.name = "SupabaseRequestError";
    this.status = status;
    this.details = details;
  }
}

function getServerConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  console.info("Supabase server environment diagnostics:", {
    isServer: typeof window === "undefined",
    checkedVariables: [
      "NEXT_PUBLIC_SUPABASE_URL",
      "SUPABASE_SERVICE_ROLE_KEY",
    ],
    hasSupabaseUrl: Boolean(url),
    hasLegacySupabaseUrl: Boolean(process.env.SUPABASE_URL),
    hasSupabaseServiceRoleKey: Boolean(serviceRoleKey),
  });

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Supabase server environment variables are not configured. Expected " +
        "NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
    );
  }

  return {
    url: url
      .replace(/\/rest\/v1(?:\/.*)?\/?$/, "")
      .replace(/\/$/, ""),
    serviceRoleKey,
  };
}

async function request(path, options = {}) {
  const { data } = await requestWithMetadata(path, options);
  return data;
}

async function requestWithMetadata(path, options = {}) {
  const { url, serviceRoleKey } = getServerConfig();
  const response = await fetch(`${url}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const details = await response.text();
    throw new SupabaseRequestError(
      `Supabase request failed with status ${response.status}.`,
      { status: response.status, details }
    );
  }

  if (response.status === 204) {
    return { data: null, count: null };
  }

  const text = await response.text();
  const contentRange = response.headers.get("content-range");
  const total = contentRange?.split("/").at(-1);

  return {
    data: text ? JSON.parse(text) : null,
    count: total && total !== "*" ? Number(total) : null,
  };
}

export const supabaseServer = { request, requestWithMetadata };
export { SupabaseRequestError };
