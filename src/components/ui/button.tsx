import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyle = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

    let variantStyle = "";
    switch (variant) {
      case "destructive":
        variantStyle = "bg-destructive text-destructive-foreground hover:bg-destructive/90";
        break;
      case "outline":
        variantStyle = "border border-input bg-background hover:bg-accent hover:text-accent-foreground";
        break;
      case "secondary":
        variantStyle = "bg-secondary text-secondary-foreground hover:bg-secondary/80";
        break;
      case "ghost":
        variantStyle = "hover:bg-accent hover:text-accent-foreground";
        break;
      case "link":
        variantStyle = "text-primary underline-offset-4 hover:underline";
        break;
      default: // default
        variantStyle = "bg-primary text-primary-foreground hover:bg-primary/90";
        break;
    }

    let sizeStyle = "";
    switch (size) {
      case "sm":
        sizeStyle = "h-9 rounded-md px-3";
        break;
      case "lg":
        sizeStyle = "h-11 rounded-md px-8";
        break;
      case "icon":
        sizeStyle = "h-10 w-10";
        break;
      default: // default
        sizeStyle = "h-10 px-4 py-2";
        break;
    }

    return (
      <button
        className={cn(baseStyle, variantStyle, sizeStyle, className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
// buttonVariants export removed as CVA is no longer used here
