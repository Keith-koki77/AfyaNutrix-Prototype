import { createServerClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { data: mealPlans, error } = await supabase
      .from("meal_plans")
      .select(`
        *,
        client:profiles!meal_plans_client_id_fkey(full_name, email),
        nutritionist:profiles!meal_plans_nutritionist_id_fkey(full_name, email)
      `)
      .or(`client_id.eq.${user.id},nutritionist_id.eq.${user.id}`)
      .order("created_at", { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ mealPlans })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
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
    } = body

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
        status: "draft",
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ mealPlan }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
