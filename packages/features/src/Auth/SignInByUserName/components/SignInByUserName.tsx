"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { cn } from "@ui/lib/utils";

import { Button } from "@ui/components/button";

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
import { FormSchema } from "../schema";
import { forwardRef, type ReactNode } from "react";
import { toastFactory } from "./toasts";
import { useSignInByUserName } from "../domain/domain";

export interface SignInByUserNameFormProps {
  children: ReactNode;
}

export const Form = forwardRef<
  HTMLFormElement,
  React.HTMLAttributes<HTMLFormElement>
>(({ children, ...props }, ref) => {
  const signInByUserName = useSignInByUserName();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const res = await signInByUserName(data);
      // this is strictly connected with UI so we leave it there
      toastFactory.createSuccessToast(res);
    } catch (e) {
      // this is strictly connected with UI
      toastFactory.createErrorToast(e);
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
