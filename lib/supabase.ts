import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://juqwuyhxwzzitzxxscns.supabase.co";
const supabaseAnonKey = "sb_publishable__82wSKjaE1d_QzjhzajvBQ__YbJbAiA";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);