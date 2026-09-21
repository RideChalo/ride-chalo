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
  "sb_publishable_p45SbnHnuq8ed7SSZzBLOQ_ezEvaBHA0NTY5NH0.QcNN01TbDLW6m9xAs4Wl1I7OYpb6ZjQE3zlTwKszN_A";

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
