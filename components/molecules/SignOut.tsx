import { LogOut } from "lucide-react";
import React from "react";

export default function SignOut() {
 return (
  <form action={"/auth/signout"}>
   <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
    <LogOut className="mr-2 h-4 w-4" />
    <span>Log out</span>
   </button>
  </form>
 );
}
