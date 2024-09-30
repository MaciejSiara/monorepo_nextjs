"use client";
import { AuthRepository } from "../repository";
import * as SignInByUserName from "@features/Auth/SignInByUserName/SignInByUserName";
import { useRouter } from "next/navigation";

export const SignInScreenConfig = ({ children }: any) => {
  const router = useRouter();
  return (
    <SignInByUserName.SignInConfigByUserNameProvider
      config={{
        afterSignInAction: () => {
          console.log("CORE: after sign in");
          router.push("/home");
        },
        repository: AuthRepository,
      }}
    >
      {children}
    </SignInByUserName.SignInConfigByUserNameProvider>
  );
};
