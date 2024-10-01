import { useCallback } from "react";
import { useSignInByUserNameConfig } from "../config";
import { Dependencies, SignInData } from "./types";

// sign in and save JWT in cookies (or any other additional business logic)
// split it to separated function with injected dependencies for easier testing
// we can inject mocked auth repository and write unit tests easily
// this kind of implementation is framework agnostic
export const signInByUserName = async (
  signInData: SignInData,
  { authRepository, signInFinalAction }: Dependencies
) => {
  const res = await authRepository.signInByUserName(signInData);
  // SAVE JWT to Cookie and other domain specific business logic
  // ...
  // ...
  signInFinalAction(res);
  return res;
};

// framework specific usage of business logic implementation
export const useSignInByUserName = () => {
  const { authRepository, signInFinalAction } = useSignInByUserNameConfig();
  return useCallback(
    (data: SignInData) =>
      signInByUserName(data, { authRepository, signInFinalAction }),
    []
  );
};
