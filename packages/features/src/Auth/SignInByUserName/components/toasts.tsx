import { toast } from "@ui/hooks/use-toast";
import { SignInByUserNameResponse } from "../domain/types";

export const toastFactory = {
  createSuccessToast: (data: SignInByUserNameResponse) => {
    toast({
      title: "Signed in with:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  },
  createErrorToast: (error: any) => {
    toast({
      variant: "destructive",
      title: "Sign in error:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(error, null, 2)}</code>
        </pre>
      ),
    });
  },
};
