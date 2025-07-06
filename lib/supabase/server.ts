import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { cookies } from "next/headers"

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          role: "nutritionist" | "client"
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          role?: "nutritionist" | "client"
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          role?: "nutritionist" | "client"
          created_at?: string
          updated_at?: string
        }
      }
      clients: {
        Row: {
          id: string
          nutritionist_id: string
          profile_id: string
          goals: string | null
          dietary_restrictions: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          nutritionist_id: string
          profile_id: string
          goals?: string | null
          dietary_restrictions?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          nutritionist_id?: string
          profile_id?: string
          goals?: string | null
          dietary_restrictions?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      appointments: {
        Row: {
          id: string
          client_id: string
          nutritionist_id: string
          date: string
          time: string
          status: "scheduled" | "completed" | "cancelled"
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          client_id: string
          nutritionist_id: string
          date: string
          time: string
          status?: "scheduled" | "completed" | "cancelled"
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          client_id?: string
          nutritionist_id?: string
          date?: string
          time?: string
          status?: "scheduled" | "completed" | "cancelled"
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      meal_plans: {
        Row: {
          id: string
          client_id: string
          nutritionist_id: string
          title: string
          description: string | null
          plan_data: any
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          client_id: string
          nutritionist_id: string
          title: string
          description?: string | null
          plan_data?: any
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          client_id?: string
          nutritionist_id?: string
          title?: string
          description?: string | null
          plan_data?: any
          created_at?: string
          updated_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          sender_id: string
          recipient_id: string
          content: string
          read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          sender_id: string
          recipient_id: string
          content: string
          read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          sender_id?: string
          recipient_id?: string
          content?: string
          read?: boolean
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

export async function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl) {
    throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_URL")
  }

  if (!supabaseAnonKey) {
    throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY")
  }

  const cookieStore = await cookies()

  return createServerClient<Database>(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value, ...options })
        } catch (error) {
          // The `set` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value: "", ...options })
        } catch (error) {
          // The `delete` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })
}

// Export the createServerClient function directly
export { createServerClient }

// Legacy function name for backward compatibility
export async function createSupabaseServerClient() {
  return createClient()
}
