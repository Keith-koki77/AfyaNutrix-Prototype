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
    const startDate = searchParams.get("start_date")
    const endDate = searchParams.get("end_date")

    let query = supabase
      .from("appointments")
      .select(`
        *,
        client:profiles!appointments_client_id_fkey(
          id,
          full_name, 
          email, 
          phone,
          avatar_url
        ),
        nutritionist:profiles!appointments_nutritionist_id_fkey(
          id,
          full_name, 
          email, 
          phone
        )
      `)
      .or(`client_id.eq.${user.id},nutritionist_id.eq.${user.id}`)

    // Apply filters
    if (status) {
      query = query.eq("status", status)
    }

    if (startDate) {
      query = query.gte("scheduled_at", startDate)
    }

    if (endDate) {
      query = query.lte("scheduled_at", endDate)
    }

    const { data: appointments, error } = await query.order("scheduled_at", { ascending: true })

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ appointments })
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

    const body = await request.json()
    const {
      client_id,
      nutritionist_id,
      title,
      description,
      scheduled_at,
      duration_minutes,
      type,
      notes,
      meeting_link,
    } = body

    // Validate required fields
    if (!title || !scheduled_at) {
      return NextResponse.json({ error: "Title and scheduled time are required" }, { status: 400 })
    }

    // Validate that the user can create this appointment
    if (user.id !== client_id && user.id !== nutritionist_id) {
      return NextResponse.json({ error: "Access denied" }, { status: 403 })
    }

    const { data: appointment, error } = await supabase
      .from("appointments")
      .insert({
        client_id,
        nutritionist_id,
        title,
        description,
        scheduled_at,
        duration_minutes: duration_minutes || 60,
        type,
        notes,
        meeting_link,
        status: "scheduled",
      })
      .select(`
        *,
        client:profiles!appointments_client_id_fkey(
          id,
          full_name, 
          email, 
          phone,
          avatar_url
        ),
        nutritionist:profiles!appointments_nutritionist_id_fkey(
          id,
          full_name, 
          email, 
          phone
        )
      `)
      .single()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ appointment }, { status: 201 })
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
      return NextResponse.json({ error: "Appointment ID is required" }, { status: 400 })
    }

    // Check if user has permission to update this appointment
    const { data: existingAppointment } = await supabase
      .from("appointments")
      .select("client_id, nutritionist_id")
      .eq("id", id)
      .single()

    if (
      !existingAppointment ||
      (user.id !== existingAppointment.client_id && user.id !== existingAppointment.nutritionist_id)
    ) {
      return NextResponse.json({ error: "Access denied" }, { status: 403 })
    }

    const updateData: any = {}
    if (status) updateData.status = status
    if (notes) updateData.notes = notes

    const { data: appointment, error } = await supabase
      .from("appointments")
      .update(updateData)
      .eq("id", id)
      .select(`
        *,
        client:profiles!appointments_client_id_fkey(
          id,
          full_name, 
          email, 
          phone,
          avatar_url
        ),
        nutritionist:profiles!appointments_nutritionist_id_fkey(
          id,
          full_name, 
          email, 
          phone
        )
      `)
      .single()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ appointment })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
