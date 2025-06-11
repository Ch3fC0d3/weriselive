import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ArtSubmission = {
  id: string
  title: string
  creator_name: string
  email: string
  description?: string
  artwork_url: string
  created_at: string
}

export type ContactMessage = {
  id: string
  name: string
  email: string
  subject: string
  message: string
  created_at: string
}