import { supabase } from '@/lib/superbase';

type ErrorObject = {
  message: string;
  status: 'error' | 'success';
};

type signupFunction = (email: string, password: string) => Promise<ErrorObject>;

const signup: signupFunction = async (email: string, password: string) => {
  const res = await supabase.auth.signUp({
    email,
    password,
  });
  if (res.error) {
    console.log(res);
    return {
      message: res.error.message,
      status: 'error',
    };
  }

  return {
    message: 'Account created successfully',
    status: 'success',
  };
};

export { signup };
