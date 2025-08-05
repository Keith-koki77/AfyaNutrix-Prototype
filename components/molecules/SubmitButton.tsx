"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export default function SubmitButton({ content }: { content?: string }) {
 const { pending } = useFormStatus();
 return (
  <Button
   type="submit"
   className="w-full bg-[#1B5E20] hover:bg-[#2E7D32]"
   disabled={pending}
  >
   {pending ? "Submitting..." : content || "Submit"}
  </Button>
 );
}
