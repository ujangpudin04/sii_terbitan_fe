// "use server";
// import { RegisterSchema } from "@/libs/zod";

// export const signUpCredentials = async (prevState, formData) => {
//   console.log("Form Data Received:", Object.fromEntries(formData.entries()));

//   const validatedFields = RegisterSchema.safeParse(
//     Object.fromEntries(formData.entries())
//   );

//   if (!validatedFields.success) {
//     return {
//       error: validatedFields.error.flatten().fieldErrors,
//     };
//   }

//   const { username, email, password } = validatedFields.data;
//   console.log("Validated Data:", { username, email, password });

//   // You can add the next steps for registration here
// };

"use server";

import { RegisterSchema, SignInSchema } from "@/libs/zod";
import { redirect } from "next/navigation";
// import { signIn } from "@/auth";
// import { AuthError } from "next-auth";

export const signUpCredentials = async (prevState, formData) => {
  console.log("form data", formData);

  const validatedFields = RegisterSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { username, email, password } = validatedFields.data;

  console.log("username", username);
  console.log("email", email);
  console.log("pass", password);

  // try {
  //   await prisma.user.create({
  //     data: {
  //       name,
  //       email,
  //       password: hashedPassword,
  //     },
  //   });
  // } catch (error) {
  //   console.log(error);
  //   return { message: "Failed to register user" };
  // }
  // redirect("/login");
};

// Sign in Credential action
// export const signInCredentials = async (prevState, formData) => {
//   const validatedFields = SignInSchema.safeParse(
//     Object.fromEntries(formData.entries())
//   );

//   if (!validatedFields.success) {
//     return {
//       error: validatedFields.error.flatten().fieldErrors,
//     };
//   }

//   const { email, password } = validatedFields.data;

//   try {
//     await signIn("credentials", { email, password, redirectTo: "/dashboard" });
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case "CredentialsSignin":
//           return { message: "Invalid Credentials." };
//         default:
//           return { message: "Something went wrong." };
//       }
//     }
//     throw error;
//   }
// };
