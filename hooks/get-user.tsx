"use client";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { Tables } from "@/types/database.types";

function useUser() {
 const supabase = createClient();
 const [user, setUser] = useState<User | null>(null);
 const [profile, setProfile] = useState<Tables<"profiles"> | null>(null);
 const [practice, setPractice] = useState<Tables<"practice"> | null>(null);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const getUser = async () => {
   const {
    data: { user },
   } = await supabase.auth.getUser();
   setUser(user);

   if (!user) {
    setLoading(false);
    setProfile(null);
    setPractice(null);
    console.error("No user found");

    return;
   }

   const profile = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", user.id)
    .single();

   if (profile.error) {
    console.error(profile.error);
   }

   setProfile(profile.data);

   const practice = await supabase
    .from("practice")
    .select("*")
    .eq("user_id", user.id)
    .maybeSingle();

   console.log(practice, "practice");

   if (practice.error) {
    console.error(practice.error);
   }

   setPractice(practice.data);
   setLoading(false);
  };

  getUser();
 }, []);

 return { user, profile, practice, loading };
}

export default useUser;
