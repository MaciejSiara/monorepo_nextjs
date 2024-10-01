import * as SignInByUserName from "@features/Auth/SignInByUserName";
import { MainLayout } from "@features/Auth/SignInByUserName/components/layout";

import { SignInScreenConfig } from "./config";

export const SignInScreen = () => {
  return (
    <MainLayout>
      <SignInScreenConfig>
        <SignInByUserName.Title title="CORE TITLE" />
        <SignInByUserName.Form>
          <SignInByUserName.UserNameInput />
          <SignInByUserName.SubmitButton />
        </SignInByUserName.Form>
      </SignInScreenConfig>
    </MainLayout>
  );
};
