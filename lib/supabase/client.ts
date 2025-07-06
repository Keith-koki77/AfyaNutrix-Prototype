import { createBrowserClient } from "@supabase/ssr"
import type { Database } from "./database.types"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_URL")
}

if (!supabaseAnonKey) {
  throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY")
}

// Create a singleton client for client-side usage
let supabaseClient: ReturnType<typeof createBrowserClient<Database>> | null = null

export function createClient() {
  if (!supabaseClient) {
    supabaseClient = createBrowserClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  }
  return supabaseClient
}

// Legacy function name for backward compatibility
export function createSupabaseClient() {
  return createClient()
}

export const supabase = createClient()
