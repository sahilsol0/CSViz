# CSViz: Mobile CSV Viewer

CSViz is a web application designed for easily viewing and interacting with CSV (Comma Separated Values) files, especially on mobile devices. It offers a clean, responsive interface, PWA (Progressive Web App) capabilities for an app-like experience, and features optimized for mobile viewing.

## Key Features

*   **CSV File Upload:** Easily upload your `.csv` files directly in the browser.
*   **Delimiter Selection:** Choose from common delimiters (comma, semicolon, tab, pipe) to correctly parse your CSV data.
*   **Responsive Table Display:** View your CSV data in a clean, scrollable table that adapts to different screen sizes.
*   **Landscape Mode Optimization:** On mobile devices, the app encourages landscape orientation for optimal data viewing.
*   **UI Minimization:** Maximize screen real estate for data by minimizing UI controls to a floating action button.
*   **Progressive Web App (PWA):** Installable on your device for an app-like experience, including offline access capabilities.
*   **Error Handling:** Provides feedback on parsing errors or invalid file types.

## Technologies Used

*   **Next.js:** React framework for server-side rendering, static site generation, and a great developer experience.
*   **TypeScript:** For type safety and improved code quality.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **ShadCN UI:** A collection of beautifully designed, accessible, and customizable UI components.
*   **Lucide React:** For clean and consistent icons.

## How It Works

1.  **Upload a CSV file:** Click the "Load CSV" button and select your file.
2.  **Select Delimiter (if needed):** If your CSV uses a delimiter other than a comma, select the correct one from the dropdown. The table will re-parse and update.
3.  **View Data:** The CSV content will be displayed in a table.
4.  **Optimize View:**
    *   On mobile, rotate to landscape for the best experience. The app will prompt you if you're in portrait mode with data loaded.
    *   In landscape mode (or if manually triggered), the main UI controls (header, footer) will collapse into a floating action button (FAB) to maximize the space for the table. Click the FAB to expand the controls again.

Enjoy viewing your CSV data with CSViz!
