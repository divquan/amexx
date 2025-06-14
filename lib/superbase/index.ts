import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://glousriixlgbnjbrckhm.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
