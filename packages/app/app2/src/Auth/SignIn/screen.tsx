import * as SignInByUserName from "@features/Auth/SignInByUserName";
import { SignInScreenConfig } from "./config";
import { MainLayout } from "@features/Auth/SignInByUserName/components/layout";

export const SignInScreen = () => {
  return (
    <MainLayout className="text-muted-foreground">
      <SignInScreenConfig>
        <SignInByUserName.Title title="APP 2 TITLE" />
        <SignInByUserName.Form>
          <SignInByUserName.UserNameInput />
          <SignInByUserName.SubmitButton />
        </SignInByUserName.Form>
      </SignInScreenConfig>
    </MainLayout>
  );
};
