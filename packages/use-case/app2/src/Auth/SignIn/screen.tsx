import * as SignInByUserName from "@features/Auth/SignInByUserName/SignInByUserName";
import { SignInScreenConfig } from "./config";

export const SignInScreen = () => {
  return (
    <SignInScreenConfig>
      <SignInByUserName.Title title="APP 2 TITLE" />
      <SignInByUserName.Form>
        <SignInByUserName.UserNameInput />
        <SignInByUserName.SubmitButton />
      </SignInByUserName.Form>
    </SignInScreenConfig>
  );
};
