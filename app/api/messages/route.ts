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
    const recipientId = searchParams.get("recipient_id")
    const limit = Number.parseInt(searchParams.get("limit") || "50")
    const offset = Number.parseInt(searchParams.get("offset") || "0")

    let query = supabase
      .from("messages")
      .select(`
        *,
        sender:profiles!messages_sender_id_fkey(
          id,
          full_name, 
          email, 
          avatar_url
        ),
        recipient:profiles!messages_recipient_id_fkey(
          id,
          full_name, 
          email, 
          avatar_url
        )
      `)
      .or(`sender_id.eq.${user.id},recipient_id.eq.${user.id}`)

    if (recipientId) {
      query = query.or(
        `and(sender_id.eq.${user.id},recipient_id.eq.${recipientId}),and(sender_id.eq.${recipientId},recipient_id.eq.${user.id})`,
      )
    }

    const { data: messages, error } = await query
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1)

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ messages })
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
    const { recipient_id, content, attachment_url } = body

    // Validate required fields
    if (!recipient_id || !content) {
      return NextResponse.json({ error: "Recipient ID and content are required" }, { status: 400 })
    }

    // Verify recipient exists
    const { data: recipient } = await supabase.from("profiles").select("id").eq("id", recipient_id).single()

    if (!recipient) {
      return NextResponse.json({ error: "Recipient not found" }, { status: 404 })
    }

    const { data: message, error } = await supabase
      .from("messages")
      .insert({
        sender_id: user.id,
        recipient_id,
        content,
        attachment_url,
        status: "sent",
      })
      .select(`
        *,
        sender:profiles!messages_sender_id_fkey(
          id,
          full_name, 
          email, 
          avatar_url
        ),
        recipient:profiles!messages_recipient_id_fkey(
          id,
          full_name, 
          email, 
          avatar_url
        )
      `)
      .single()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ message }, { status: 201 })
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
    const { id, status } = body

    if (!id) {
      return NextResponse.json({ error: "Message ID is required" }, { status: 400 })
    }

    // Check if user is the recipient (only recipients can mark as read)
    const { data: existingMessage } = await supabase.from("messages").select("recipient_id").eq("id", id).single()

    if (!existingMessage || user.id !== existingMessage.recipient_id) {
      return NextResponse.json({ error: "Access denied" }, { status: 403 })
    }

    const updateData: any = {}
    if (status === "read") {
      updateData.status = "read"
      updateData.read_at = new Date().toISOString()
    }

    const { data: message, error } = await supabase
      .from("messages")
      .update(updateData)
      .eq("id", id)
      .select(`
        *,
        sender:profiles!messages_sender_id_fkey(
          id,
          full_name, 
          email, 
          avatar_url
        ),
        recipient:profiles!messages_recipient_id_fkey(
          id,
          full_name, 
          email, 
          avatar_url
        )
      `)
      .single()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ message })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
