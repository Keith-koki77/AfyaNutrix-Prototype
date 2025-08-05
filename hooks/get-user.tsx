"use client";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

function useUser() {
 const supabase = createClient();
 const [user, setUser] = useState<User | null>(null);

 useEffect(() => {
  const getUser = async () => {
   const {
    data: { user },
   } = await supabase.auth.getUser();
   setUser(user);
  };

  getUser();
 }, []);

 return user;
}

export default useUser;
