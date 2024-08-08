import { supabase } from "@/lib/superbase";

const signInUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  console.log(data);
  console.error("Error logging user in", error?.message);
};

export { signInUser };
