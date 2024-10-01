"use client";

import { useRouter } from "next/navigation";

export const HOME_ROUTE = "/home";

export const useHomeRouter = () => {
  const router = useRouter();
  return {
    push() {
      router.push(HOME_ROUTE);
    },
  };
};
