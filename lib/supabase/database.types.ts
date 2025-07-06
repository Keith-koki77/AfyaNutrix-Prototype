export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      appointments: {
        Row: {
          appointment_date: string
          client_id: string | null
          created_at: string | null
          description: string | null
          duration_minutes: number | null
          id: string
          meeting_link: string | null
          notes: string | null
          nutritionist_id: string | null
          status: Database["public"]["Enums"]["appointment_status"] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          appointment_date: string
          client_id?: string | null
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string
          meeting_link?: string | null
          notes?: string | null
          nutritionist_id?: string | null
          status?: Database["public"]["Enums"]["appointment_status"] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          appointment_date?: string
          client_id?: string | null
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string
          meeting_link?: string | null
          notes?: string | null
          nutritionist_id?: string | null
          status?: Database["public"]["Enums"]["appointment_status"] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
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
      clients: {
        Row: {
          activity_level: string | null
          allergies: string[] | null
          created_at: string | null
          dietary_preferences: string[] | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          goals: string[] | null
          health_conditions: string[] | null
          height: number | null
          id: string
          nutritionist_id: string | null
          updated_at: string | null
          user_id: string | null
          weight: number | null
        }
        Insert: {
          activity_level?: string | null
          allergies?: string[] | null
          created_at?: string | null
          dietary_preferences?: string[] | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          goals?: string[] | null
          health_conditions?: string[] | null
          height?: number | null
          id?: string
          nutritionist_id?: string | null
          updated_at?: string | null
          user_id?: string | null
          weight?: number | null
        }
        Update: {
          activity_level?: string | null
          allergies?: string[] | null
          created_at?: string | null
          dietary_preferences?: string[] | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          goals?: string[] | null
          health_conditions?: string[] | null
          height?: number | null
          id?: string
          nutritionist_id?: string | null
          updated_at?: string | null
          user_id?: string | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "clients_nutritionist_id_fkey"
            columns: ["nutritionist_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clients_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      kenyan_foods: {
        Row: {
          calories_per_100g: number | null
          carbs_per_100g: number | null
          category: string
          common_serving_size: string | null
          created_at: string | null
          description: string | null
          fats_per_100g: number | null
          fiber_per_100g: number | null
          id: string
          name: string
          protein_per_100g: number | null
        }
        Insert: {
          calories_per_100g?: number | null
          carbs_per_100g?: number | null
          category: string
          common_serving_size?: string | null
          created_at?: string | null
          description?: string | null
          fats_per_100g?: number | null
          fiber_per_100g?: number | null
          id?: string
          name: string
          protein_per_100g?: number | null
        }
        Update: {
          calories_per_100g?: number | null
          carbs_per_100g?: number | null
          category?: string
          common_serving_size?: string | null
          created_at?: string | null
          description?: string | null
          fats_per_100g?: number | null
          fiber_per_100g?: number | null
          id?: string
          name?: string
          protein_per_100g?: number | null
        }
        Relationships: []
      }
      meal_plan_items: {
        Row: {
          calories: number | null
          carbs: number | null
          created_at: string | null
          day_of_week: number
          fats: number | null
          fiber: number | null
          food_name: string
          id: string
          instructions: string | null
          meal_plan_id: string | null
          meal_type: string
          protein: number | null
          quantity: number | null
          unit: string | null
        }
        Insert: {
          calories?: number | null
          carbs?: number | null
          created_at?: string | null
          day_of_week: number
          fats?: number | null
          fiber?: number | null
          food_name: string
          id?: string
          instructions?: string | null
          meal_plan_id?: string | null
          meal_type: string
          protein?: number | null
          quantity?: number | null
          unit?: string | null
        }
        Update: {
          calories?: number | null
          carbs?: number | null
          created_at?: string | null
          day_of_week?: number
          fats?: number | null
          fiber?: number | null
          food_name?: string
          id?: string
          instructions?: string | null
          meal_plan_id?: string | null
          meal_type?: string
          protein?: number | null
          quantity?: number | null
          unit?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "meal_plan_items_meal_plan_id_fkey"
            columns: ["meal_plan_id"]
            isOneToOne: false
            referencedRelation: "meal_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      meal_plans: {
        Row: {
          client_id: string | null
          created_at: string | null
          daily_calories: number | null
          daily_carbs: number | null
          daily_fats: number | null
          daily_protein: number | null
          description: string | null
          end_date: string | null
          id: string
          notes: string | null
          nutritionist_id: string | null
          start_date: string
          status: Database["public"]["Enums"]["meal_plan_status"] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          client_id?: string | null
          created_at?: string | null
          daily_calories?: number | null
          daily_carbs?: number | null
          daily_fats?: number | null
          daily_protein?: number | null
          description?: string | null
          end_date?: string | null
          id?: string
          notes?: string | null
          nutritionist_id?: string | null
          start_date: string
          status?: Database["public"]["Enums"]["meal_plan_status"] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          client_id?: string | null
          created_at?: string | null
          daily_calories?: number | null
          daily_carbs?: number | null
          daily_fats?: number | null
          daily_protein?: number | null
          description?: string | null
          end_date?: string | null
          id?: string
          notes?: string | null
          nutritionist_id?: string | null
          start_date?: string
          status?: Database["public"]["Enums"]["meal_plan_status"] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "meal_plans_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
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
          attachment_url: string | null
          content: string
          created_at: string | null
          id: string
          read_at: string | null
          recipient_id: string | null
          sender_id: string | null
          status: Database["public"]["Enums"]["message_status"] | null
        }
        Insert: {
          attachment_url?: string | null
          content: string
          created_at?: string | null
          id?: string
          read_at?: string | null
          recipient_id?: string | null
          sender_id?: string | null
          status?: Database["public"]["Enums"]["message_status"] | null
        }
        Update: {
          attachment_url?: string | null
          content?: string
          created_at?: string | null
          id?: string
          read_at?: string | null
          recipient_id?: string | null
          sender_id?: string | null
          status?: Database["public"]["Enums"]["message_status"] | null
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
          avatar_url: string | null
          bio: string | null
          consultation_fee: number | null
          created_at: string | null
          date_of_birth: string | null
          email: string
          full_name: string
          gender: string | null
          id: string
          license_number: string | null
          phone: string | null
          role: Database["public"]["Enums"]["user_role"]
          specializations: string[] | null
          updated_at: string | null
          years_experience: number | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          consultation_fee?: number | null
          created_at?: string | null
          date_of_birth?: string | null
          email: string
          full_name: string
          gender?: string | null
          id: string
          license_number?: string | null
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          specializations?: string[] | null
          updated_at?: string | null
          years_experience?: number | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          consultation_fee?: number | null
          created_at?: string | null
          date_of_birth?: string | null
          email?: string
          full_name?: string
          gender?: string | null
          id?: string
          license_number?: string | null
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          specializations?: string[] | null
          updated_at?: string | null
          years_experience?: number | null
        }
        Relationships: []
      }
      progress_entries: {
        Row: {
          body_fat_percentage: number | null
          client_id: string | null
          created_at: string | null
          id: string
          measurements: Json | null
          muscle_mass: number | null
          notes: string | null
          photos: string[] | null
          recorded_date: string
          weight: number | null
        }
        Insert: {
          body_fat_percentage?: number | null
          client_id?: string | null
          created_at?: string | null
          id?: string
          measurements?: Json | null
          muscle_mass?: number | null
          notes?: string | null
          photos?: string[] | null
          recorded_date: string
          weight?: number | null
        }
        Update: {
          body_fat_percentage?: number | null
          client_id?: string | null
          created_at?: string | null
          id?: string
          measurements?: Json | null
          muscle_mass?: number | null
          notes?: string | null
          photos?: string[] | null
          recorded_date?: string
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "progress_entries_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
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
      meal_plan_status: "active" | "completed" | "paused"
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
