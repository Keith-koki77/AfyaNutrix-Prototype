import { createServerClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const supabase = await createServerClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get user profile to check role
    const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()

    if (profile?.role !== "nutritionist") {
      return NextResponse.json({ error: "Access denied" }, { status: 403 })
    }

    // Get clients for the current nutritionist
    const { data: clients, error } = await supabase
      .from("client_profiles")
      .select(`
        *,
        user:profiles!client_profiles_user_id_fkey(
          id, 
          full_name, 
          email, 
          phone,
          avatar_url
        )
      `)
      .eq("nutritionist_id", user.id)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ clients })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createServerClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get user profile to check role
    const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()

    if (profile?.role !== "nutritionist") {
      return NextResponse.json({ error: "Access denied" }, { status: 403 })
    }

    const body = await request.json()
    const {
      user_id,
      height,
      weight,
      activity_level,
      health_conditions,
      allergies,
      dietary_preferences,
      goals,
      emergency_contact_name,
      emergency_contact_phone,
    } = body

    // Validate required fields
    if (!user_id) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    const { data: clientProfile, error } = await supabase
      .from("client_profiles")
      .insert({
        user_id,
        nutritionist_id: user.id,
        height,
        weight,
        activity_level,
        health_conditions,
        allergies,
        dietary_preferences,
        goals,
        emergency_contact_name,
        emergency_contact_phone,
      })
      .select(`
        *,
        user:profiles!client_profiles_user_id_fkey(
          id, 
          full_name, 
          email, 
          phone,
          avatar_url
        )
      `)
      .single()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ client: clientProfile }, { status: 201 })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
