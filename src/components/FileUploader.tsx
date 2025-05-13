"use client";

import type { ChangeEvent } from 'react';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FileUploaderProps {
  onFileLoad: (fileContent: string, fileName: string) => void;
  isLoading: boolean;
  onError: (message: string) => void;
}

export function FileUploader({ onFileLoad, isLoading, onError }: FileUploaderProps) {
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type !== 'text/csv' && !file.name.endsWith('.csv')) {
        onError("Invalid file type. Please upload a .csv file.");
        event.target.value = ''; // Reset file input
        return;
      }
      try {
        const reader = new FileReader();
        reader.onload = (e) => {
          const text = e.target?.result as string;
          onFileLoad(text, file.name);
        };
        reader.onerror = () => {
          onError("Error reading file.");
        }
        reader.readAsText(file);
      } catch (error) {
        onError("Error processing file.");
      }
      event.target.value = ''; // Reset file input to allow re-uploading the same file
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2">
      <Label htmlFor="csv-upload" className="sr-only">Upload CSV</Label>
      <Input
        id="csv-upload"
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        disabled={isLoading}
        className="hidden"
      />
      <Button
        onClick={() => document.getElementById('csv-upload')?.click()}
        disabled={isLoading}
        className="w-full sm:w-auto"
      >
        <Upload className="mr-2 h-4 w-4" />
        {isLoading ? 'Loading...' : 'Load CSV'}
      </Button>
    </div>
  );
}
