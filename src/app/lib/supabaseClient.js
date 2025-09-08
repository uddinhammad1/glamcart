import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://qwuahfqtbihibayddrtw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3dWFoZnF0YmloaWJheWRkcnR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczNjQzNjYsImV4cCI6MjA3Mjk0MDM2Nn0.zxTZTnCVqvdF6rimKagIcTM1qgfal0F16k2R49ex0n4';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
