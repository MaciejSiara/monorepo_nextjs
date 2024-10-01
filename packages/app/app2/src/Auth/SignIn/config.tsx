"use client";
import { AuthRepository } from "../repository";
import * as SignInByUserName from "@features/Auth/SignInByUserName";
import { useHomeRouter } from "@app/core/Home/router";

export const SignInScreenConfig = ({ children }: any) => {
  const homeRouter = useHomeRouter();

  return (
    <SignInByUserName.SignInConfigByUserNameProvider
      config={{
        signInFinalAction: () => {
          console.log("APP 2: after sign in");
          homeRouter.push();
        },
        authRepository: AuthRepository,
      }}
    >
      {children}
    </SignInByUserName.SignInConfigByUserNameProvider>
  );
};
