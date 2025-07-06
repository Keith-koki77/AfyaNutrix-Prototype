import { createBrowserClient } from "@supabase/ssr"

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

let client: ReturnType<typeof createBrowserClient<Database>> | null = null

export function createClient() {
  if (client) {
    return client
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl) {
    throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_URL")
  }

  if (!supabaseAnonKey) {
    throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY")
  }

  client = createBrowserClient<Database>(supabaseUrl, supabaseAnonKey)
  return client
}
