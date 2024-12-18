import { supabase } from '../lib/supabase';
import { FormData } from '../components/RegistrationForm/types';

export async function submitRegistration(formData: FormData) {
  debugger
  try {
    const { data, error } = await supabase
      .from('registrations')
      .insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting registration:', error);
    return { success: false, error };
  }
}