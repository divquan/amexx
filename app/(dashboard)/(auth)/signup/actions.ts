import { supabase } from "@/lib/superbase";

type ErrorObject = {
  message: string;
  status: "error" | "success";
};

type signupFunction = (
  email: string,
  password: string,
  phoneNumber: string,
  firstName: string,
  lastName: string
) => Promise<ErrorObject>;

const signup: signupFunction = async (
  email,
  password,
  phoneNumber,
  firstName,
  lastName
) => {
  const res = await supabase.auth.signUp({
    email,
    password,
    phone: phoneNumber,
    options: {
      data: { firstName, lastName },
    },
  });
  if (res.error) {
    console.log(res);
    return {
      message: res.error.message,
      status: "error",
    };
  }
  console.log(res.data);

  const { data, error } = await supabase
    .from("profiles")
    .insert([
      {
        phoneNumber,
        userId: res.data.user?.id,
        first_name: firstName,
        last_name: lastName,
      },
    ])
    .select();
  if (error) {
    console.log(error);
    return {
      message: error.message.includes("violates foreign key constraint")
        ? "An account with this email already exists"
        : error.message,
      status: "error",
    };
  }

  return {
    message: "Account created successfully",
    status: "success",
  };
};

export { signup };
