/*
  RIDE CHALO - SUPABASE CONFIG

  This file connects the frontend to Supabase.

  Authentication can support:
  1. Mobile / Phone OTP
  2. Email verification

  IMPORTANT:
  Use only the Supabase Publishable/Anon key here.
  NEVER put the Supabase service_role/secret key in this file.
*/

const SUPABASE_URL =
  "https://xocfwbrqxllqyufjddcv.supabase.co";

const SUPABASE_ANON_KEY =
  "sb_publishable_p45SbnHnuq8ed7SSZzBLOQ_ezEvaBHA";

let supabaseClient = null;

try {
  if (
    window.supabase &&
    SUPABASE_URL.startsWith("https://") &&
    SUPABASE_ANON_KEY!== "sb_publishable_p45SbnHnuq8ed7SSZzBLOQ_ezEvaBHA"
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
