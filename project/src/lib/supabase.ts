import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ydusjixrfchdzrsbfbah.supabase.co";
const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkdXNqaXhyZmNoZHpyc2JmYmFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0MDc0MjcsImV4cCI6MjA0OTk4MzQyN30.a18ci86PzLKZllljzQRf6QV_pco1j8eHN1kMOUBrNuU";
            
export const supabase = createClient(supabaseUrl, supabaseAnonKey);