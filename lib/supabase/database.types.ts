export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      appointments: {
        Row: {
          id: string
          client_id: string
          nutritionist_id: string
          title: string
          description: string | null
          scheduled_at: string
          duration_minutes: number
          status: "scheduled" | "completed" | "cancelled" | "no_show"
          meeting_link: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          client_id: string
          nutritionist_id: string
          title: string
          description?: string | null
          scheduled_at: string
          duration_minutes?: number
          status?: "scheduled" | "completed" | "cancelled" | "no_show"
          meeting_link?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          client_id?: string
          nutritionist_id?: string
          title?: string
          description?: string | null
          scheduled_at?: string
          duration_minutes?: number
          status?: "scheduled" | "completed" | "cancelled" | "no_show"
          meeting_link?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "appointments_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_nutritionist_id_fkey"
            columns: ["nutritionist_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
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
          status: "draft" | "active" | "completed" | "archived"
          meals: Json
          notes: string | null
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
          status?: "draft" | "active" | "completed" | "archived"
          meals?: Json
          notes?: string | null
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
          status?: "draft" | "active" | "completed" | "archived"
          meals?: Json
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "meal_plans_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "meal_plans_nutritionist_id_fkey"
            columns: ["nutritionist_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          id: string
          sender_id: string
          recipient_id: string
          content: string
          message_type: "text" | "image" | "file"
          file_url: string | null
          read_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          sender_id: string
          recipient_id: string
          content: string
          message_type?: "text" | "image" | "file"
          file_url?: string | null
          read_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          sender_id?: string
          recipient_id?: string
          content?: string
          message_type?: "text" | "image" | "file"
          file_url?: string | null
          read_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          role: "nutritionist" | "client"
          phone: string | null
          date_of_birth: string | null
          gender: "male" | "female" | "other" | null
          height: number | null
          weight: number | null
          activity_level: "sedentary" | "lightly_active" | "moderately_active" | "very_active" | "extra_active" | null
          health_conditions: string[] | null
          dietary_preferences: string[] | null
          allergies: string[] | null
          goals: string[] | null
          emergency_contact: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          role?: "nutritionist" | "client"
          phone?: string | null
          date_of_birth?: string | null
          gender?: "male" | "female" | "other" | null
          height?: number | null
          weight?: number | null
          activity_level?: "sedentary" | "lightly_active" | "moderately_active" | "very_active" | "extra_active" | null
          health_conditions?: string[] | null
          dietary_preferences?: string[] | null
          allergies?: string[] | null
          goals?: string[] | null
          emergency_contact?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          role?: "nutritionist" | "client"
          phone?: string | null
          date_of_birth?: string | null
          gender?: "male" | "female" | "other" | null
          height?: number | null
          weight?: number | null
          activity_level?: "sedentary" | "lightly_active" | "moderately_active" | "very_active" | "extra_active" | null
          health_conditions?: string[] | null
          dietary_preferences?: string[] | null
          allergies?: string[] | null
          goals?: string[] | null
          emergency_contact?: Json | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    ? (Database["public"]["Tables"] & Database["public"]["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends keyof Database["public"]["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof Database["public"]["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends keyof Database["public"]["Enums"] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never
