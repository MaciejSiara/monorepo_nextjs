import { SignInScreen } from "@use-case/core/Auth/SignIn/screen";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <SignInScreen />
    </main>
  );
}
