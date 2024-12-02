import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabaseSecret = import.meta.env.VITE_SUPABASE_SECRET;

export const supabase = createClient(supabaseUrl, supabaseKey, supabaseSecret);