"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { cn } from "@ui/lib/utils";

import { Button } from "@ui/components/button";

import { toast } from "@ui/hooks/use-toast";
import {
  Form as FormCmp,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/components/ui/form";
import { Input } from "@ui/components/ui/input";
import { FormSchema } from "./schema";
import { useSignInByUserNameConfig } from "./config";
import { forwardRef, type ReactNode } from "react";

export interface SignInByUserNameFormProps {
  children: ReactNode;
}

export const Form = forwardRef<
  HTMLFormElement,
  React.HTMLAttributes<HTMLFormElement>
>(({ children, ...props }, ref) => {
  const { repository, afterSignInAction } = useSignInByUserNameConfig();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const res = await repository.signIn(data.username);
      console.log(res);

      toast({
        title: "Signed in with:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });

      afterSignInAction(res);
    } catch (e) {
      toast({
        variant: "destructive",
        title: "Sign in error:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(e, null, 2)}</code>
          </pre>
        ),
      });
    }
  }

  return (
    <FormCmp {...form}>
      <form
        {...props}
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit(onSubmit)(e);
        }}
        className="w-2/3 space-y-6"
        ref={ref}
      >
        {children}
      </form>
    </FormCmp>
  );
});

Form.displayName = "SignInByUserNameForm";

export const SubmitButton = forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <Button ref={ref} type="submit" className={cn(className)} {...props}>
      Submit
    </Button>
  );
});
SubmitButton.displayName = "SignInByUserNameSubmitButton";

export const Title = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight text-primary-foreground  ",
        className
      )}
      {...props}
    >
      {props.title ?? "Sign In by username"}
    </h3>
  );
});
Title.displayName = "SignInByUserNameTitle";

export const UserNameInput = () => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="Gołota" {...field} />
          </FormControl>
          <FormDescription>This is your public display name.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export * from "./config";
