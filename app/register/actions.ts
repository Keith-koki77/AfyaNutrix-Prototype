"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

import { z } from "zod";

const signupSchema = z.object({
 firstName: z.string().min(1, "First name is required"),
 lastName: z.string().min(1, "Last name is required"),
 email: z.string().email("Invalid email address"),
 phone: z.string().min(1, "Phone number is required"),
 practiceType: z.string().min(1, "Practice type is required"),
 location: z.string().min(1, "Location is required"),
 agreeTerms: z.boolean().refine((val) => val, {
  message: "You must agree to the terms and conditions",
 }),
 agreeMarketing: z.boolean().optional(),
});

export type SignupFormData = z.infer<typeof signupSchema>;

export async function signup(initialState: any, formData: FormData) {
 const validatedFields = signupSchema.safeParse({
  firstName: formData.get("firstName"),
  lastName: formData.get("lastName"),
  email: formData.get("email"),
  phone: formData.get("phone"),
  practiceType: formData.get("practiceType"),
  location: formData.get("location"),
  password: formData.get("password"),
  confirmPassword: formData.get("confirmPassword"),
  agreeTerms: formData.get("agreeTerms") === "on",
  agreeMarketing: formData.get("agreeMarketing") === "on",
 });

 if (!validatedFields.success) {
  return {
   error: validatedFields.error.errors.map((err) => err.message).join(", "),
  };
 }

 const supabase = await createClient();
 // type-casting here for convenience
 // in practice, you should validate your inputs
 const data = {
  email: validatedFields.data.email,
  password: formData.get("password") as string,
 };
 const { error } = await supabase.auth.signUp(data);
 if (error) {
  redirect("/error");
 }
 revalidatePath("/", "layout");

 return {
  message:
   "Registration successful! Please check your email to confirm your account.",
  error: "",
 };
}
