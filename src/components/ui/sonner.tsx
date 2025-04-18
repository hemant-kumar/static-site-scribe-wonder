
"use client";

import { Toaster as SonnerToaster } from "sonner";
import * as React from "react";

type ToasterProps = React.ComponentProps<typeof SonnerToaster>;

// Fix the component definition to be a proper React functional component
const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <SonnerToaster
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

// Fix export to avoid direct export from sonner that might cause hook issues
export { Toaster };
export { toast } from "sonner";
