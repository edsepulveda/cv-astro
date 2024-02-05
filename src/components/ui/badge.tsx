import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        orbis:
          "print:border print:border-gray-200 bg-blue-700 text-white shadow hover:bg-blue-700/80 print:text-black",
        javascript:
          "print:border print:border-gray-200 text-white bg-yellow-500 dark:bg-yellow-700 print:text-black",
        react:
          "border border-gray-200 text-white bg-cyan-500 dark:bg-cyan-700 print:text-black",
        typescript:
          "border-transparent text-white bg-[#3178c6] print:text-black",
        tailwind:
          "border-transparent text-white bg-[#38B2AC] dark:bg-cyan-800 print:text-black",
        postgre: "border-transaprent text-white bg-[#336791] print:text-black",
        nodejs: "border-transparent bg-green-800 text-white print:text-black",
        nestjs:
          "border border-gray-200 bg-white dark:bg-red-800 dark:border-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
