import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qfkeibsxxqvrxtafecjx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFma2VpYnN4eHF2cnh0YWZlY2p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyOTEyOTEsImV4cCI6MjA3Nzg2NzI5MX0.oKroB_hWj036IDUi2EqVFOrcbG87TGZZd43s49SrKCo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
