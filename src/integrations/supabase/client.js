import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ncqfodnboussgxzjuilx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jcWZvZG5ib3Vzc2d4emp1aWx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyOTE4NTYsImV4cCI6MjA3MTg2Nzg1Nn0.mLfV0RzOlGeGymJXwv3zo0EMDUoCIC3n00d8XyepVWw";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { storage: localStorage, persistSession: true, autoRefreshToken: true }
});


