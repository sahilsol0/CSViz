"use client";

import { Label } from "@/components/ui/label"; // Will use simplified Label

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
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col gap-1.5 sm:items-center sm:flex-row sm:gap-2">
      <Label htmlFor="delimiter-select" className="text-sm font-medium shrink-0">Delimiter:</Label>
      <select
        id="delimiter-select"
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className="w-full sm:w-[180px] h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        data-ai-hint="delimiter select"
      >
        {delimiters.map((d) => (
          <option key={d.value} value={d.value}>
            {d.label}
          </option>
        ))}
      </select>
    </div>
  );
}
