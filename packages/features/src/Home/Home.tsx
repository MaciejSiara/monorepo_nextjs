import { Card, CardContent, CardHeader, CardTitle } from "@ui/components/card";
import { GoToSignInButton } from "./GoToSignIn";

export const Home = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>HOME</CardTitle>
        <CardContent>
          <GoToSignInButton />
        </CardContent>
      </CardHeader>
    </Card>
  );
};
