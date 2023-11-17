'use server';

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { z } from 'zod';
import { FormSchema } from '../types';
import { revalidatePath } from 'next/cache';


export async function actionLoginUser({
  email,
  password,
}: z.infer<typeof FormSchema>) {
  const supabase = createRouteHandlerClient({ cookies });
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return response;
}

export async function actionSignUpUser({
  email,
  password,
}: z.infer<typeof FormSchema>) {

  const domain = process.env.NEXT_PUBLIC_SITE_URL

  const supabase = createRouteHandlerClient({ cookies });

  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('email', email);

  if (data?.length) return { error: { message: 'User already exists' }, data };

  const response = await supabase.auth.signUp({
    email,
    password,
    options: { emailRedirectTo: `${domain}/api/auth/callback` },
  });

  return response;
}