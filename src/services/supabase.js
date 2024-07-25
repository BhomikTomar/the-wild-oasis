import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rotgfuklbaeeubyjgwpr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvdGdmdWtsYmFlZXVieWpnd3ByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEyOTE0ODUsImV4cCI6MjAzNjg2NzQ4NX0.qvXbUXkGLTGoX148hm_hZzb_aVRmwsKRZ-gFcyl3Hbs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
