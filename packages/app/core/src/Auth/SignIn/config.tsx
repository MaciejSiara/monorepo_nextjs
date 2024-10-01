"use client";
import { useHomeRouter } from "../../Home/router";
import { AuthRepository } from "../repository";
import * as SignInByUserName from "@features/Auth/SignInByUserName";

export const SignInScreenConfig = ({ children }: any) => {
  const homeRouter = useHomeRouter();

  return (
    <SignInByUserName.SignInConfigByUserNameProvider
      config={{
        signInFinalAction: () => {
          console.log("CORE: after sign in");
          homeRouter.push();
        },
        authRepository: AuthRepository,
      }}
    >
      {children}
    </SignInByUserName.SignInConfigByUserNameProvider>
  );
};
