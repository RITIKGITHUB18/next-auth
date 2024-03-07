import { auth } from "@/auth";

// ! so instead of using the react hook we can use this lib method
// ! which facilitate with the server side rendering operation you can see the Admin page for understanding how it works

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

export const currentRole = async () => {
  const session = await auth();

  return session?.user?.role;
};
