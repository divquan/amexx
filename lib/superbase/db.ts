import { supabase } from "./index";

const getUser = async () => {
  let { data: profiles, error } = await supabase.from("profiles").select("*");
  if (error) {
    throw error;
  }
  return profiles;
};

const getMessages = async () => {
  let { data: profiles, error } = await supabase.from("messages").select("*");
  if (error) {
    throw error;
  }
  return profiles;
};

export { getUser, getMessages };
