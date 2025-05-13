"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CsvTableProps {
  headers: string[];
  data: string[][];
}

export function CsvTable({ headers, data }: CsvTableProps) {
  if (headers.length === 0 && data.length === 0) {
    return (
      <div className="flex-grow flex items-center justify-center">
        <p className="text-muted-foreground">No CSV data loaded or data is empty.</p>
      </div>
    );
  }
  
  if (headers.length === 0 && data.length > 0 ) {
     return (
      <div className="flex-grow flex items-center justify-center">
        <p className="text-destructive">Error: CSV data found, but no headers. Please check your delimiter or file format.</p>
      </div>
    );
  }


  return (
    <ScrollArea className="flex-grow border rounded-md shadow-sm w-full h-[calc(100vh-180px)] sm:h-[calc(100vh-150px)]">
      <Table className="min-w-full table-auto">
        <TableHeader className="sticky top-0 bg-primary/90 backdrop-blur-sm">
          <TableRow>
            {headers.map((header, index) => (
              <TableHead
                key={index}
                className="px-2 py-1.5 text-xs font-semibold text-primary-foreground whitespace-nowrap"
                data-ai-hint="table header"
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} className="hover:bg-muted/50">
              {row.map((cell, cellIndex) => (
                <TableCell
                  key={cellIndex}
                  className="px-2 py-1 text-[0.7rem] sm:text-xs whitespace-nowrap border-b border-r last:border-r-0"
                  data-ai-hint="table cell"
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {data.length === 0 && headers.length > 0 && (
        <div className="p-4 text-center text-muted-foreground">
          CSV has headers but no data rows.
        </div>
      )}
    </ScrollArea>
  );
}
