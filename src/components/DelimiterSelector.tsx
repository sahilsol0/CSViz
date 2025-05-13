"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface DelimiterSelectorProps {
  value: string;
  onChange: (delimiter: string) => void;
  disabled?: boolean;
}

const delimiters = [
  { label: "Comma (,)", value: "," },
  { label: "Semicolon (;)", value: ";" },
  { label: "Tab (\\t)", value: "\t" },
  { label: "Pipe (|)", value: "|" },
];

export function DelimiterSelector({ value, onChange, disabled }: DelimiterSelectorProps) {
  return (
    <div className="flex flex-col gap-1.5 sm:items-center sm:flex-row sm:gap-2">
      <Label htmlFor="delimiter-select" className="text-sm font-medium shrink-0">Delimiter:</Label>
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger id="delimiter-select" className="w-full sm:w-[180px] h-10">
          <SelectValue placeholder="Select delimiter" />
        </SelectTrigger>
        <SelectContent>
          {delimiters.map((d) => (
            <SelectItem key={d.value} value={d.value}>
              {d.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
