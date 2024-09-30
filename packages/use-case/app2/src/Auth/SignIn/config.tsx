"use client";
import { AuthRepository } from "../repository";
import * as SignInByUserName from "@features/Auth/SignInByUserName/SignInByUserName";

export const SignInScreenConfig = ({ children }: any) => {
  return (
    <SignInByUserName.SignInConfigByUserNameProvider
      config={{
        afterSignInAction: () => {
          console.log("APP 2: after sign in");
        },
        repository: AuthRepository,
      }}
    >
      {children}
    </SignInByUserName.SignInConfigByUserNameProvider>
  );
};
