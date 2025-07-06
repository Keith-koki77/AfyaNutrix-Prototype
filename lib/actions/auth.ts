"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createServerClient } from "@/lib/supabase/server"

export async function login(formData: FormData) {
  const supabase = await createServerClient()

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.error("Login error:", error)
    redirect("/login?error=Invalid credentials")
  }

  revalidatePath("/", "layout")
  redirect("/dashboard")
}

export async function signup(formData: FormData) {
  const supabase = await createServerClient()

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        full_name: formData.get("full_name") as string,
        role: (formData.get("role") as string) || "client",
      },
    },
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    console.error("Signup error:", error)
    redirect("/register?error=Registration failed")
  }

  revalidatePath("/", "layout")
  redirect("/onboarding")
}

export async function signout() {
  const supabase = await createServerClient()
  await supabase.auth.signOut()
  revalidatePath("/", "layout")
  redirect("/")
}

export async function updateProfile(formData: FormData) {
  const supabase = await createServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("Unauthorized")
  }

  const updateData = {
    full_name: formData.get("full_name") as string,
    phone: formData.get("phone") as string,
    bio: formData.get("bio") as string,
  }

  // Remove empty values
  Object.keys(updateData).forEach((key) => {
    if (updateData[key as keyof typeof updateData] === "") {
      delete updateData[key as keyof typeof updateData]
    }
  })

  const { error } = await supabase.from("profiles").update(updateData).eq("id", user.id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/dashboard/settings")
}
