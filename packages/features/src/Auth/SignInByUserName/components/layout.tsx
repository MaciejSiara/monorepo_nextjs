import { ReactNode } from "react";
import { cn } from "@ui/lib/utils";

export interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <main
      className={cn(
        "flex flex-col items-center justify-between min-h-screen p-24",
        className
      )}
    >
      {children}
    </main>
  );
};
