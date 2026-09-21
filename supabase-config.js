/*
  SUPABASE SETUP
  1. Open your Supabase project.
  2. Put your Project URL and anon/public key below.
  3. Enable Authentication -> Providers -> Phone.
  4. Configure an SMS provider in Supabase for real OTP delivery.
*/

const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

let supabaseClient = null;

if (
  window.supabase &&
  SUPABASE_URL.startsWith("http") &&
  SUPABASE_ANON_KEY !== "YOUR_SUPABASE_ANON_KEY"
) {
  supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );
}

function supabaseReady() {
  return !!supabaseClient;
}
