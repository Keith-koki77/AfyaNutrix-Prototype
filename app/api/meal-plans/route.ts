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

    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")
    const clientId = searchParams.get("client_id")

    let query = supabase
      .from("meal_plans")
      .select(`
        *,
        client:profiles!meal_plans_client_id_fkey(
          id,
          full_name, 
          email, 
          avatar_url
        ),
        nutritionist:profiles!meal_plans_nutritionist_id_fkey(
          id,
          full_name, 
          email
        )
      `)
      .or(`client_id.eq.${user.id},nutritionist_id.eq.${user.id}`)

    // Apply filters
    if (status) {
      query = query.eq("status", status)
    }

    if (clientId) {
      query = query.eq("client_id", clientId)
    }

    const { data: mealPlans, error } = await query.order("created_at", { ascending: false })

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ mealPlans })
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
      return NextResponse.json({ error: "Only nutritionists can create meal plans" }, { status: 403 })
    }

    const body = await request.json()
    const {
      client_id,
      title,
      description,
      start_date,
      end_date,
      daily_calories,
      daily_protein,
      daily_carbs,
      daily_fats,
      notes,
    } = body

    // Validate required fields
    if (!client_id || !title || !start_date) {
      return NextResponse.json({ error: "Client ID, title, and start date are required" }, { status: 400 })
    }

    // Verify the client belongs to this nutritionist
    const { data: clientProfile } = await supabase
      .from("client_profiles")
      .select("id")
      .eq("user_id", client_id)
      .eq("nutritionist_id", user.id)
      .single()

    if (!clientProfile) {
      return NextResponse.json({ error: "Client not found or access denied" }, { status: 403 })
    }

    const { data: mealPlan, error } = await supabase
      .from("meal_plans")
      .insert({
        client_id,
        nutritionist_id: user.id,
        title,
        description,
        start_date,
        end_date,
        daily_calories,
        daily_protein,
        daily_carbs,
        daily_fats,
        notes,
        status: "draft",
      })
      .select(`
        *,
        client:profiles!meal_plans_client_id_fkey(
          id,
          full_name, 
          email, 
          avatar_url
        ),
        nutritionist:profiles!meal_plans_nutritionist_id_fkey(
          id,
          full_name, 
          email
        )
      `)
      .single()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ mealPlan }, { status: 201 })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const supabase = await createServerClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { id, status, notes } = body

    if (!id) {
      return NextResponse.json({ error: "Meal plan ID is required" }, { status: 400 })
    }

    // Check if user has permission to update this meal plan
    const { data: existingMealPlan } = await supabase
      .from("meal_plans")
      .select("client_id, nutritionist_id")
      .eq("id", id)
      .single()

    if (!existingMealPlan || (user.id !== existingMealPlan.client_id && user.id !== existingMealPlan.nutritionist_id)) {
      return NextResponse.json({ error: "Access denied" }, { status: 403 })
    }

    const updateData: any = {}
    if (status) updateData.status = status
    if (notes !== undefined) updateData.notes = notes

    const { data: mealPlan, error } = await supabase
      .from("meal_plans")
      .update(updateData)
      .eq("id", id)
      .select(`
        *,
        client:profiles!meal_plans_client_id_fkey(
          id,
          full_name, 
          email, 
          avatar_url
        ),
        nutritionist:profiles!meal_plans_nutritionist_id_fkey(
          id,
          full_name, 
          email
        )
      `)
      .single()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ mealPlan })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
