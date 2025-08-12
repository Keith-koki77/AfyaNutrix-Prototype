"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const profileSchema = z.object({
 first_name: z.string().min(1),
 last_name: z.string().min(1),
 email: z.string().email(),
 phone: z.string().min(1),
 bio: z.string().min(1),
 practice_type: z.string().min(1),
});

export async function updateProfile(prevState: any, formData: FormData) {
 const supabase = await createClient();
 const {
  data: { user },
 } = await supabase.auth.getUser();

 if (!user) {
  return { error: "User not authenticated", message: "" };
 }

 const validatedFields = profileSchema.safeParse({
  first_name: formData.get("first_name"),
  last_name: formData.get("last_name"),
  email: formData.get("email") || user?.email,
  phone: formData.get("phone"),
  bio: formData.get("bio"),
  practice_type: formData.get("practice_type"),
 });

 if (!validatedFields.success) {
  console.error(validatedFields.error, "error from profile submission");
  console.log(validatedFields.error.issues);

  return { error: "Invalid fields", message: "" };
 }

 const { first_name, last_name, email, phone, bio, practice_type } =
  validatedFields.data;

 const { error } = await supabase
  .from("profiles")
  .update({
   first_name: first_name,
   last_name: last_name,
   email: email,
   phone: phone,
   bio: bio,
   practice_type: practice_type,
  })
  .eq("user_id", user.id);
 if (error) {
  console.error(error, "error from profile submission");
  return { error: "Failed to update profile", message: "" };
 }

 revalidatePath("/dashboard/settings");
 return { error: "", message: "Profile updated successfully" };
}

const practiceSchema = z.object({
 clinic_name: z.string().min(1, "Clinic name is required"),
 type: z.string().min(1, "Practice type is required"),
 location: z.string().min(1, "Location is required"),
 license_number: z.string().min(1, "License number is required"),
});

export async function updatePractice(prevState: any, formData: FormData) {
 const supabase = await createClient();
 const {
  data: { user },
 } = await supabase.auth.getUser();

 if (!user) {
  return { error: "User not authenticated", message: "" };
 }

 const validatedFields = practiceSchema.safeParse({
  clinic_name: formData.get("practice_name"),
  type: formData.get("type"),
  location: formData.get("location"),
  license_number: formData.get("license_number"),
 });

 if (!validatedFields.success) {
  console.error(validatedFields.error, "error from practice submission");
  const errorMessages = validatedFields.error.issues
   .map((issue) => issue.message)
   .join(", ");
  return { error: `Invalid fields: ${errorMessages}`, message: "" };
 }

 const { clinic_name, type, location, license_number } = validatedFields.data;

 // Use upsert to handle both insert and update cases
 const { error } = await supabase.from("practice").upsert(
  {
   user_id: user.id,
   clinic_name,
   type,
   location,
   license_number,
   updated_at: new Date().toISOString(),
  },
  {
   onConflict: "user_id", // Assuming user_id is unique
  }
 );

 if (error) {
  console.error(error, "error from practice submission");
  return { error: "Failed to update practice information", message: "" };
 }

 revalidatePath("/dashboard/settings");
 return { error: "", message: "Practice information updated successfully" };
}
