export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          role: "nutritionist" | "client"
          phone: string | null
          date_of_birth: string | null
          gender: "male" | "female" | "other" | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          role: "nutritionist" | "client"
          phone?: string | null
          date_of_birth?: string | null
          gender?: "male" | "female" | "other" | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          role?: "nutritionist" | "client"
          phone?: string | null
          date_of_birth?: string | null
          gender?: "male" | "female" | "other" | null
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
          start_date: string
          end_date: string
          daily_calories: number | null
          daily_protein: number | null
          daily_carbs: number | null
          daily_fats: number | null
          status: "draft" | "active" | "completed" | "cancelled"
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          client_id: string
          nutritionist_id: string
          title: string
          description?: string | null
          start_date: string
          end_date: string
          daily_calories?: number | null
          daily_protein?: number | null
          daily_carbs?: number | null
          daily_fats?: number | null
          status?: "draft" | "active" | "completed" | "cancelled"
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          client_id?: string
          nutritionist_id?: string
          title?: string
          description?: string | null
          start_date?: string
          end_date?: string
          daily_calories?: number | null
          daily_protein?: number | null
          daily_carbs?: number | null
          daily_fats?: number | null
          status?: "draft" | "active" | "completed" | "cancelled"
          created_at?: string
          updated_at?: string
        }
      }
      appointments: {
        Row: {
          id: string
          client_id: string
          nutritionist_id: string
          scheduled_at: string
          duration_minutes: number
          type: "consultation" | "follow_up" | "assessment"
          status: "scheduled" | "completed" | "cancelled" | "no_show"
          notes: string | null
          meeting_link: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          client_id: string
          nutritionist_id: string
          scheduled_at: string
          duration_minutes?: number
          type: "consultation" | "follow_up" | "assessment"
          status?: "scheduled" | "completed" | "cancelled" | "no_show"
          notes?: string | null
          meeting_link?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          client_id?: string
          nutritionist_id?: string
          scheduled_at?: string
          duration_minutes?: number
          type?: "consultation" | "follow_up" | "assessment"
          status?: "scheduled" | "completed" | "cancelled" | "no_show"
          notes?: string | null
          meeting_link?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
