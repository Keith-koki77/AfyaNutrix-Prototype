"use server"

import { createServerClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function createMealPlan(formData: FormData) {
  const supabase = createServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("Unauthorized")
  }

  const clientId = formData.get("clientId") as string
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const startDate = formData.get("startDate") as string
  const endDate = formData.get("endDate") as string
  const dailyCalories = Number.parseInt(formData.get("dailyCalories") as string)

  const { error } = await supabase.from("meal_plans").insert({
    client_id: clientId,
    nutritionist_id: user.id,
    title,
    description,
    start_date: startDate,
    end_date: endDate,
    daily_calories: dailyCalories,
    status: "draft",
  })

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/dashboard/meal-plans")
}

export async function updateMealPlanStatus(mealPlanId: string, status: string) {
  const supabase = createServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("Unauthorized")
  }

  const { error } = await supabase
    .from("meal_plans")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", mealPlanId)
    .eq("nutritionist_id", user.id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/dashboard/meal-plans")
}
