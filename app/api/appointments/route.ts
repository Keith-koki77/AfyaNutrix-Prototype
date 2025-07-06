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

    const { data: appointments, error } = await supabase
      .from("appointments")
      .select(`
        *,
        client:profiles!appointments_client_id_fkey(full_name, email),
        nutritionist:profiles!appointments_nutritionist_id_fkey(full_name, email)
      `)
      .or(`client_id.eq.${user.id},nutritionist_id.eq.${user.id}`)
      .order("scheduled_at", { ascending: true })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ appointments })
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
    const { client_id, nutritionist_id, scheduled_at, duration_minutes, type, notes, meeting_link } = body

    const { data: appointment, error } = await supabase
      .from("appointments")
      .insert({
        client_id,
        nutritionist_id,
        scheduled_at,
        duration_minutes: duration_minutes || 60,
        type,
        notes,
        meeting_link,
        status: "scheduled",
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ appointment }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
