import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ProblemStatement {
  id: number;
  domain: string;
  title: string;
  description: string;
  skills: string;
  is_internship: boolean;
  created_at: string;
}
