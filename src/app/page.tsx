
"use client";

import { useState, useEffect, useCallback } from 'react';
import { FileUploader } from '@/components/FileUploader';
import { DelimiterSelector } from '@/components/DelimiterSelector';
import { CsvTable } from '@/components/CsvTable';
import { OrientationEnforcer } from '@/components/OrientationEnforcer';
import { parseCSV, type ParseResult } from '@/lib/csvUtils';
import { AlertTriangle, FileText, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


interface CsvState {
  headers: string[];
  data: string[][];
  fileName: string | null;
  error: string | null;
}

export default function CsvViewerPage() {
  const [csvState, setCsvState] = useState<CsvState>({
    headers: [],
    data: [],
    fileName: null,
    error: null,
  });
  const [delimiter, setDelimiter] = useState<string>(',');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [originalFileContent, setOriginalFileContent] = useState<string | null>(null);
  const [isPortrait, setIsPortrait] = useState<boolean | null>(null);
  const [isUiMinimized, setIsUiMinimized] = useState<boolean>(true); // Default to true, will be adjusted by orientation

  useEffect(() => {
    // Set UI minimized state based on orientation
    // Fullscreen (UI minimized) in landscape, not fullscreen (UI visible) in portrait
    if (isPortrait !== null) { // Ensure orientation is determined
      setIsUiMinimized(!isPortrait); 
    }
  }, [isPortrait]); // Re-run when orientation changes


  const processCsv = useCallback((fileContent: string, currentDelimiter: string, fileName?: string) => {
    setIsLoading(true);
    setCsvState(prev => ({ ...prev, error: null })); 

    setTimeout(() => {
      const result: ParseResult = parseCSV(fileContent, currentDelimiter);
      if (result.error) {
        setCsvState(prev => ({
          ...prev,
          headers: [],
          data: [],
          error: result.error || "Failed to parse CSV.",
          fileName: fileName || prev.fileName,
        }));
        console.error("Parsing Error:", result.error || "Could not parse the CSV file.");
      } else {
        setCsvState({
          headers: result.headers,
          data: result.data,
          error: null,
          fileName: fileName || csvState.fileName,
        });
        if (fileName) { 
            console.log("CSV Loaded:", `${fileName} loaded successfully. Headers: ${result.headers.length}, Rows: ${result.data.length}`);
        }
      }
      setIsLoading(false);
    }, 300);
  }, [csvState.fileName]);


  const handleFileLoad = (fileContent: string, fileName: string) => {
    setOriginalFileContent(fileContent);
    processCsv(fileContent, delimiter, fileName);
  };

  const handleDelimiterChange = (newDelimiter: string) => {
    setDelimiter(newDelimiter);
    if (originalFileContent) {
      processCsv(originalFileContent, newDelimiter);
    }
  };
  
  const handleError = (message: string) => {
    setCsvState(prev => ({ ...prev, error: message, headers: [], data: [] }));
    console.error("Error:", message);
    setIsLoading(false);
  };

  const toggleUiMinimize = () => {
    setIsUiMinimized(prev => !prev);
  };

  // Show main content unless in portrait with data loaded (then OrientationEnforcer takes over)
  const showMainContentArea = !(isPortrait === true && originalFileContent && !csvState.error);


  return (
    <div className="flex flex-col h-screen max-h-screen bg-background text-foreground p-2 sm:p-4 gap-3 sm:gap-4">
      <OrientationEnforcer onOrientationChange={setIsPortrait} isDataLoaded={!!originalFileContent && !csvState.error}/>

      {showMainContentArea && (
        <>
          {!isUiMinimized && (
            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-3 bg-card rounded-lg shadow">
              <div className="flex items-center justify-between sm:justify-start">
                <h1 className="text-2xl font-semibold text-primary flex items-center">
                  <FileText className="w-7 h-7 mr-2" /> CSViz
                </h1>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleUiMinimize}
                  aria-label="Maximize Data View"
                  className="text-muted-foreground hover:text-primary sm:ml-2"
                >
                  <Maximize2 className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
                <FileUploader onFileLoad={handleFileLoad} isLoading={isLoading} onError={handleError} />
                <DelimiterSelector value={delimiter} onChange={handleDelimiterChange} disabled={isLoading || !originalFileContent} />
              </div>
            </header>
          )}

          {csvState.error && (
            <Alert variant="destructive" className="mb-0">
              <AlertTriangle className="h-5 w-5" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{csvState.error}</AlertDescription>
            </Alert>
          )}
          
          {isLoading && (
             <div className="flex-grow flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <svg className="animate-spin h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <p className="mt-2 text-muted-foreground">Processing CSV...</p>
                </div>
            </div>
          )}

          {!isLoading && (
            <main className="flex-grow flex flex-col min-h-0">
             <CsvTable headers={csvState.headers} data={csvState.data} />
            </main>
          )}
          
          {!isUiMinimized && csvState.fileName && !csvState.error && (
            <footer className="text-xs text-muted-foreground p-2 text-center sm:text-left">
              Displaying: <strong>{csvState.fileName}</strong> ({csvState.headers.length} columns, {csvState.data.length} rows)
              <p className="text-[0.6rem] mt-1">Note: This viewer uses a simple parser. Complex CSVs with quoted delimiters might not display correctly.</p>
            </footer>
          )}

          {isUiMinimized && (
            <Button
              onClick={toggleUiMinimize}
              className="fixed bottom-4 right-4 z-50 rounded-full w-14 h-14 shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
              size="icon"
              aria-label="Expand Controls"
            >
              <Minimize2 className="h-7 w-7" />
            </Button>
          )}
        </>
      )}
    </div>
  );
}

