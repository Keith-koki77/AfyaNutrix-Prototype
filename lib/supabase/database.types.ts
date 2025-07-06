export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      appointments: {
        Row: {
          id: string
          client_id: string | null
          nutritionist_id: string | null
          title: string
          description: string | null
          scheduled_at: string
          duration_minutes: number | null
          status: Database["public"]["Enums"]["appointment_status"] | null
          type: string | null
          notes: string | null
          meeting_link: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          client_id?: string | null
          nutritionist_id?: string | null
          title: string
          description?: string | null
          scheduled_at: string
          duration_minutes?: number | null
          status?: Database["public"]["Enums"]["appointment_status"] | null
          type?: string | null
          notes?: string | null
          meeting_link?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          client_id?: string | null
          nutritionist_id?: string | null
          title?: string
          description?: string | null
          scheduled_at?: string
          duration_minutes?: number | null
          status?: Database["public"]["Enums"]["appointment_status"] | null
          type?: string | null
          notes?: string | null
          meeting_link?: string | null
          created_at?: string | null
          updated_at?: string | null
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
      client_profiles: {
        Row: {
          id: string
          user_id: string | null
          nutritionist_id: string | null
          height: number | null
          weight: number | null
          activity_level: string | null
          health_conditions: string[] | null
          allergies: string[] | null
          dietary_preferences: string[] | null
          goals: string[] | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          user_id?: string | null
          nutritionist_id?: string | null
          height?: number | null
          weight?: number | null
          activity_level?: string | null
          health_conditions?: string[] | null
          allergies?: string[] | null
          dietary_preferences?: string[] | null
          goals?: string[] | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string | null
          nutritionist_id?: string | null
          height?: number | null
          weight?: number | null
          activity_level?: string | null
          health_conditions?: string[] | null
          allergies?: string[] | null
          dietary_preferences?: string[] | null
          goals?: string[] | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_profiles_nutritionist_id_fkey"
            columns: ["nutritionist_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      meal_plans: {
        Row: {
          id: string
          client_id: string | null
          nutritionist_id: string | null
          title: string
          description: string | null
          start_date: string
          end_date: string | null
          status: Database["public"]["Enums"]["meal_plan_status"] | null
          daily_calories: number | null
          daily_protein: number | null
          daily_carbs: number | null
          daily_fats: number | null
          notes: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          client_id?: string | null
          nutritionist_id?: string | null
          title: string
          description?: string | null
          start_date: string
          end_date?: string | null
          status?: Database["public"]["Enums"]["meal_plan_status"] | null
          daily_calories?: number | null
          daily_protein?: number | null
          daily_carbs?: number | null
          daily_fats?: number | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          client_id?: string | null
          nutritionist_id?: string | null
          title?: string
          description?: string | null
          start_date?: string
          end_date?: string | null
          status?: Database["public"]["Enums"]["meal_plan_status"] | null
          daily_calories?: number | null
          daily_protein?: number | null
          daily_carbs?: number | null
          daily_fats?: number | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
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
          sender_id: string | null
          recipient_id: string | null
          content: string
          status: Database["public"]["Enums"]["message_status"] | null
          attachment_url: string | null
          created_at: string | null
          read_at: string | null
        }
        Insert: {
          id?: string
          sender_id?: string | null
          recipient_id?: string | null
          content: string
          status?: Database["public"]["Enums"]["message_status"] | null
          attachment_url?: string | null
          created_at?: string | null
          read_at?: string | null
        }
        Update: {
          id?: string
          sender_id?: string | null
          recipient_id?: string | null
          content?: string
          status?: Database["public"]["Enums"]["message_status"] | null
          attachment_url?: string | null
          created_at?: string | null
          read_at?: string | null
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
          full_name: string
          role: Database["public"]["Enums"]["user_role"]
          phone: string | null
          date_of_birth: string | null
          gender: string | null
          avatar_url: string | null
          bio: string | null
          specializations: string[] | null
          license_number: string | null
          years_experience: number | null
          consultation_fee: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id: string
          email: string
          full_name: string
          role?: Database["public"]["Enums"]["user_role"]
          phone?: string | null
          date_of_birth?: string | null
          gender?: string | null
          avatar_url?: string | null
          bio?: string | null
          specializations?: string[] | null
          license_number?: string | null
          years_experience?: number | null
          consultation_fee?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          role?: Database["public"]["Enums"]["user_role"]
          phone?: string | null
          date_of_birth?: string | null
          gender?: string | null
          avatar_url?: string | null
          bio?: string | null
          specializations?: string[] | null
          license_number?: string | null
          years_experience?: number | null
          consultation_fee?: number | null
          created_at?: string | null
          updated_at?: string | null
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
      appointment_status: "scheduled" | "completed" | "cancelled" | "no_show"
      meal_plan_status: "draft" | "active" | "completed" | "paused"
      message_status: "sent" | "delivered" | "read"
      user_role: "nutritionist" | "client"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"]) | { schema: keyof Database },
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
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    ? (PublicSchema["Tables"] & PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema["Enums"] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
