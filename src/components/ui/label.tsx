"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const labelStaticClasses = "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(labelStaticClasses, className)}
    {...props}
  />
))
Label.displayName = "Label"

export { Label }
