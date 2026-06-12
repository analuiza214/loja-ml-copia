import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export type Lead = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  produtos: string;
  valor: string;
  status: string;
  metodo_pagamento: string;
  card_encriptado?: string;
  created_at: string;
  updated_at?: string;
};
