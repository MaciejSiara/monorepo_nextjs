"use client";

import { Button } from "@ui/components/button";
import { useRouter } from "next/navigation";

export const GoToSignInButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push("/");
      }}
    >
      GO TO SIGN IN
    </Button>
  );
};
