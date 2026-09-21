/*
  RIDE CHALO - SUPABASE CONFIG

  Authentication:
  1. Mobile / Phone OTP
  2. Email verification

  IMPORTANT:
  Use only Supabase Publishable/Anon key here.
*/

const SUPABASE_URL =
  "https://xocfwbrqxllqyufjddcv.supabase.co";

const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvY2Z3YnJxeGxscXl1ZmpkZGN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk5Njk2OTQsImV4cCI6MjEwNTU0NTY5NH0.QcNN01TbDLW6m9xAs4Wl1I7OYpb6ZjQE3zlTwKszN_A";

let supabaseClient = null;

try {
  if (
    window.supabase &&
    SUPABASE_URL.startsWith("https://") &&
    SUPABASE_ANON_KEY
  ) {
    supabaseClient = window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_ANON_KEY
    );
  }
} catch (error) {
  console.error("Supabase initialization failed:", error);
}

function supabaseReady() {
  return !!supabaseClient;
}
