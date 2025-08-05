"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function login(initialState: any, formData: FormData) {
 const supabase = await createClient();

 // type-casting here for convenience
 // in practice, you should validate your inputs
 const data = {
  email: formData.get("email") as string,
  password: formData.get("password") as string,
 };

 const { error } = await supabase.auth.signInWithPassword(data);

 if (error) {
  return {
   error: error.message,
  };
 }

 revalidatePath("/", "layout");

 // Redirect to dashboard after successful login
 redirect("/dashboard");
}
