"use client";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { Tables } from "@/types/database.types";

function useUser() {
 const supabase = createClient();
 const [user, setUser] = useState<User | null>(null);
 const [profile, setProfile] = useState<Tables<"profiles"> | null>(null);

 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const getUser = async () => {
   const {
    data: { user },
   } = await supabase.auth.getUser();
   setUser(user);

   if (user) {
    const profile = await supabase
     .from("profiles")
     .select("*")
     .eq("user_id", user.id)
     .single();

    if (profile.error) {
     console.error(profile.error);
    }

    setProfile(profile.data);
   }
   setLoading(false);
  };

  getUser();
 }, []);

 return { user, profile, loading };
}

export default useUser;
