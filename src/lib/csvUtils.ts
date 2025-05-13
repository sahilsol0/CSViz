export interface ParseResult {
  headers: string[];
  data: string[][];
  error?: string;
}

export function parseCSV(csvString: string, delimiter: string = ','): ParseResult {
  if (!csvString || csvString.trim() === '') {
    return { headers: [], data: [], error: "CSV data is empty." };
  }

  try {
    const lines = csvString.trim().split(/\r?\n/); // Handles both LF and CRLF line endings
    
    if (lines.length === 0) {
      return { headers: [], data: [] };
    }

    // Basic delimiter splitting. This does NOT correctly handle delimiters within quoted fields.
    // For robust CSV parsing, a proper library (e.g., Papaparse) is recommended.
    const headers = lines[0].split(delimiter).map(header => header.trim());
    
    const data: string[][] = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      // Skip empty lines
      if (line.trim() === '') {
        continue;
      }
      const row = line.split(delimiter).map(cell => cell.trim());
      // Ensure row has the same number of columns as headers, pad with empty strings if not.
      // This is a simple way to handle potentially jagged rows, but might not be ideal for all CSVs.
      if (row.length < headers.length) {
        for (let j = row.length; j < headers.length; j++) {
          row.push('');
        }
      } else if (row.length > headers.length) {
        // Truncate if too many columns, or could throw error
        row.splice(headers.length);
      }
      data.push(row);
    }

    if (headers.length === 0 && data.length === 0 && lines.length > 0 && lines[0].trim() !== '') {
         return { headers: [], data: [], error: "Could not parse headers. Check delimiter." };
    }
    
    return { headers, data };
  } catch (e) {
    const error = e instanceof Error ? e.message : "Unknown error during parsing.";
    return { headers: [], data: [], error: `Failed to parse CSV file: ${error}` };
  }
}
