/*
  SUPABASE SETUP
  1. Open your Supabase project.
  2. Put your Project URL and anon/public key below.
  3. Enable Authentication -> Providers -> Phone.
  4. Configure an SMS provider in Supabase for real OTP delivery.
*/

const SUPABASE_URL = "https://xocfwbrqxllqyufjddcv.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_p45SbnHnuq8ed7SSZzBLOQ_ezEvaBHA0NTY5NH0.QcNN01TbDLW6m9xAs4Wl1I7OYpb6ZjQE3zlTwKszN_A";

let supabaseClient = null;

if (
  window.supabase &&
  SUPABASE_URL.startsWith("http") &&
  SUPABASE_ANON_KEY !== "sb_publishable_p45SbnHnuq8ed7SSZzBLOQ_ezEvaBHA0NTY5NH0.QcNN01TbDLW6m9xAs4Wl1I7OYpb6ZjQE3zlTwKszN_A"
) {
  supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );
}

function supabaseReady() {
  return !!supabaseClient;
}
