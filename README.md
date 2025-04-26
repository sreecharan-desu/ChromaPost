# ChromaPost Documentation

Generated on: 2025-04-26 11:34:47

## Overview

This documentation covers 29 files from the ChromaPost codebase.

## Table of Contents

### Root

- [eslint.config.js](#eslint-config-js)
- [index.html](#index-html)
- [postcss.config.cjs](#postcss-config-cjs)
- [postcss.config.js](#postcss-config-js)
- [tailwind.config.js](#tailwind-config-js)
- [vite.config.ts](#vite-config-ts)

### src

- [App.css](#src-app-css)
- [App.tsx](#src-app-tsx)
- [index.css](#src-index-css)
- [main.tsx](#src-main-tsx)
- [vite-env.d.ts](#src-vite-env-d-ts)

### src/components

- [ErrorBoundary.tsx](#src-components-errorboundary-tsx)

### src/components/Generators

- [CaptionGenerator.tsx](#src-components-generators-captiongenerator-tsx)
- [VisualsGenerator.tsx](#src-components-generators-visualsgenerator-tsx)

### src/components/Layout

- [Header.tsx](#src-components-layout-header-tsx)
- [Logo.tsx](#src-components-layout-logo-tsx)
- [Sidebar.tsx](#src-components-layout-sidebar-tsx)

### src/components/Navigation

- [TabNav.tsx](#src-components-navigation-tabnav-tsx)

### src/components/Preview

- [PreviewPanel.tsx](#src-components-preview-previewpanel-tsx)

### src/components/UI

- [ChromapostIcon.tsx](#src-components-ui-chromaposticon-tsx)
- [ErrorMessage.tsx](#src-components-ui-errormessage-tsx)
- [Icons.tsx](#src-components-ui-icons-tsx)
- [ImageUploader.tsx](#src-components-ui-imageuploader-tsx)
- [LoadingPreview.tsx](#src-components-ui-loadingpreview-tsx)
- [LoadingSpinner.tsx](#src-components-ui-loadingspinner-tsx)
- [Skeleton.tsx](#src-components-ui-skeleton-tsx)

### src/services

- [api.ts](#src-services-api-ts)

### src/types

- [index.ts](#src-types-index-ts)
- [preview.ts](#src-types-preview-ts)

## File Documentation

### Root

<a id='eslint-config-js'></a>

#### eslint.config.js

*Path: eslint.config.js*

1. **Purpose:** This file configures ESLint for the project, defining the rules and plugins used for linting TypeScript and JavaScript code. It ensures code quality and consistency by enforcing coding style and best practices.

2. **Key Functionality:**

- **`tseslint.config()`:** This function from the `typescript-eslint` package is used to create an ESLint configuration based on recommended TypeScript ESLint settings. It merges the provided configuration with the recommended settings.
    - **Parameters:**
        - An object with configuration overrides (e.g., `ignores`).
        - An object with base configurations to extend.
    - **Return Type:** An ESLint configuration object.
- **`extends`:** An array of configurations to extend. It includes recommended configurations from `@eslint/js` and `typescript-eslint`.
- **`files`:** Specifies the files to which the configuration applies (`.ts` and `.tsx` files).
- **`languageOptions`:** Configures language-specific options like `ecmaVersion` and global variables.
- **`plugins`:** An object listing ESLint plugins to use, including `react-hooks` and `react-refresh`.
- **`rules`:** An object defining specific ESLint rules and their severity. It includes rules from `react-hooks` and a custom rule for `react-refresh`.

3. **Dependencies and Relationships:**

- **Imports & Usage:** Depends on `@eslint/js`, `globals`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, and `typescript-eslint`.
- **Code Relationships:** This file is used by ESLint to lint the project's code.

4. **Usage Example:** ESLint automatically uses this configuration file when linting the project.

5. **Technical Notes:** The configuration extends recommended settings from `@eslint/js` and `typescript-eslint` for a good baseline. It also includes specific rules for React Hooks and React Refresh to improve code quality and developer experience.

---

<a id='index-html'></a>

#### index.html

*Path: index.html*

1. **Purpose:** This file is the main HTML entry point for the application. It sets up the basic HTML structure, includes the application's title, meta tags, links to external resources, and loads the main JavaScript file.

2. **Key Functionality:**

- **`<head>`:** Contains meta information about the HTML document, including character set, viewport settings, title, and links to a favicon and Google Fonts.
- **`<body>`:** Contains the main content of the HTML document.
    - **`<div id="root"></div>`:** This is the container where the React application will be rendered.
    - **`<script type="module" src="/src/main.tsx"></script>`:** This script tag loads the main JavaScript file (`main.tsx`) which bootstraps the React application. The `type="module"` attribute indicates that the script should be treated as an ES module.

3. **Dependencies and Relationships:**

- **Imports & Usage:** Imports the Google Font "Inter" and the application's main JavaScript file (`main.tsx`).
- **Code Relationships:** This file is the entry point for the application. The `main.tsx` file, referenced in the `<script>` tag, is responsible for rendering the React application into the `root` div.

4. **Usage Example:** This file is loaded by the browser when the user accesses the application.

5. **Technical Notes:** The use of `type="module"` allows for modern JavaScript features and ES module imports.

---

<a id='postcss-config-cjs'></a>

#### postcss.config.cjs

*Path: postcss.config.cjs*

1. **Purpose:** This file configures PostCSS, a CSS post-processor, to use Tailwind CSS and Autoprefixer. It enables the use of Tailwind CSS utility classes and ensures cross-browser compatibility by automatically adding vendor prefixes to CSS rules.

2. **Key Functionality:**

- **`plugins`:** An object specifying the PostCSS plugins to use.
    - **`tailwindcss`:** Enables Tailwind CSS functionality.
    - **`autoprefixer`:** Adds vendor prefixes to CSS rules for cross-browser compatibility.

3. **Dependencies and Relationships:**

- **Imports & Usage:** Depends on `tailwindcss` and `autoprefixer`.
- **Code Relationships:** This file is used by the build process (likely Vite, based on other files) to process CSS. It works in conjunction with `tailwind.config.js` to customize Tailwind CSS.

4. **Usage Example:** This file is automatically used by the build process when processing CSS files.

5. **Technical Notes:** Using a CommonJS module (`.cjs`) allows compatibility with various build tools.

---

<a id='postcss-config-js'></a>

#### postcss.config.js

*Path: postcss.config.js*

1. **Purpose:** This file serves the same purpose as `postcss.config.cjs`, configuring PostCSS with Tailwind CSS and Autoprefixer, but uses the ES module format.

2. **Key Functionality:** Identical to `postcss.config.cjs`.

3. **Dependencies and Relationships:** Identical to `postcss.config.cjs`.

4. **Usage Example:** Identical to `postcss.config.cjs`.

5. **Technical Notes:** Using an ES module (`.js`) allows for modern JavaScript syntax and may be preferred in some project setups.  Having both a `.cjs` and `.js` version can provide compatibility with different tooling configurations.

---

<a id='tailwind-config-js'></a>

#### tailwind.config.js

*Path: tailwind.config.js*

1. **Purpose:** This file configures Tailwind CSS, a utility-first CSS framework, by specifying the files to scan for Tailwind directives and customizing the default theme.

2. **Key Functionality:**

- **`content`:** An array of file paths that Tailwind CSS should scan for class names to include in the generated CSS. This ensures that only used styles are included, minimizing the final CSS file size.
- **`theme`:** An object for customizing the default Tailwind CSS theme.
    - **`extend`:** Allows extending or overriding existing theme values. In this case, it adds a custom purple color to the color palette.
- **`plugins`:** An array for registering Tailwind CSS plugins (currently empty).

3. **Dependencies and Relationships:**

- **Imports & Usage:** Depends on `tailwindcss`.
- **Code Relationships:** This file is used by PostCSS (configured in `postcss.config.js` or `postcss.config.cjs`) to generate Tailwind CSS styles.

4. **Usage Example:** Tailwind CSS uses this configuration file during the build process.

5. **Technical Notes:** The `content` array is crucial for purging unused styles and optimizing performance.

---

<a id='vite-config-ts'></a>

#### vite.config.ts

*Path: vite.config.ts*

1. **Purpose:** This file configures Vite, a build tool and development server, for the project. It defines plugins, server settings, build options, and environment variables.

2. **Key Functionality:**

- **`plugins`:** An array of Vite plugins to use.  Includes `@vitejs/plugin-react` for React support.
- **`server`:**  Configures the development server. `port` sets the server port to 3000.
- **`base`:** Sets the base public path for the application.  `./` indicates relative paths.
- **`define`:**  Defines global constants that can be used in the application code.  Replaces `process.env` with an empty object.
- **`build`:** Configures the build process. `outDir` sets the output directory to `dist`.

3. **Dependencies and Relationships:**

- **Imports & Usage:** Depends on `vite` and `@vitejs/plugin-react`.
- **Code Relationships:** This file is used by Vite to build and serve the application.  It interacts with other configuration files like `postcss.config.js` (or `.cjs`) and `tailwind.config.js` during the build process.

4. **Usage Example:** Vite uses this configuration file when running the development server or building the application.

5. **Technical Notes:** Setting `define: { 'process.env': {} }` can be useful for handling environment variables in a frontend environment where `process.env` might not be directly available. The `base: './'` setting is important for configuring relative paths for assets and resources.  The `build.outDir` setting determines where the production-ready files will be placed after running `vite build`.


**Inter-file Relationships Summary:**

- `index.html` loads `src/main.tsx` (entry point for the React app).
- `eslint.config.js` lints all `.ts` and `.tsx` files, including `src/main.tsx`.
- `vite.config.ts` orchestrates the build process, using:
    - `@vitejs/plugin-react` to handle React code.
    - `postcss.config.js` (or `.cjs`) which uses `tailwindcss` and `autoprefixer`.
    - `tailwind.config.js` to customize Tailwind CSS.
- `postcss.config.js` (or `.cjs`) and `tailwind.config.js` work together to process CSS and apply Tailwind styles.  The output is then used by the application, loaded through `index.html`.

---

### src

<a id='src-app-css'></a>

#### App.css

*Path: src/App.css*

1. **Purpose:** This file contains the CSS styles for the application, defining the visual presentation of various components and layouts. It uses a combination of custom CSS and utility classes likely from a CSS framework like Tailwind CSS.

2. **Key Functionality:**  This file doesn't contain functions or classes in the traditional programming sense. It defines CSS rules that style HTML elements. Key styles include:

    - Layout containers (`.container`, `.app-container`, `.main-content`, `.left-panel`, `.right-panel`) using flexbox for responsive design.
    - Navigation styles (`.top-nav`, `.nav-tabs`, `.nav-tab`) for tabbed navigation.
    - Component-specific styles like `.logo-wrapper`, `.generate-button`, `.preview-header`, etc., defining the look and feel of individual UI elements.
    - Responsive design considerations using media queries (`@media (max-width: 640px)`).
    - Utility classes (likely from Tailwind CSS) like `min-h-screen`, `bg-gray-50`, `grid`, `grid-cols-1`, `lg:grid-cols-2`, etc., which provide pre-defined styles for common UI patterns.
    - Custom styling for scrollbars, focus states, loading shimmer effects, touch targets, safe area handling, image drag prevention, and transitions.

3. **Dependencies and Relationships:**

    - **Imports & Usage:** This file is implicitly imported by other components (like `App.tsx`) through the import of `./index.css`, which likely imports this file.
    - **Code Relationships:** This file provides the styling for the HTML structure defined in other components, particularly `App.tsx` and its child components.

4. **Usage Example:**  N/A (CSS files are not executed in the same way as JavaScript files).

5. **Technical Notes:**

    - The use of a CSS framework (presumably Tailwind CSS based on the naming conventions) promotes maintainability and consistency in styling.
    - The inclusion of mobile optimizations, improved focus states, loading states, and other accessibility considerations demonstrates a focus on user experience and best practices.

---

<a id='src-app-tsx'></a>

#### App.tsx

*Path: src/App.tsx*

1. **Purpose:** This file is the main application component. It manages the application's state and renders the main UI layout, including the header, visuals generator, caption generator, and preview panel.

2. **Key Functionality:**

    - **`App` component:** The main functional component that renders the application's UI. It uses React Hooks (`useState`, `useEffect`) to manage component state.
    - **State Variables:**
        - `currentImage`: Stores the currently processed image (original and processed versions).
        - `currentCaption`: Stores the currently generated caption.
        - `brandName`: Stores the brand name for the preview.
        - `isMobilePreview`:  A boolean flag to control the preview display (mobile or desktop).
        - `showWelcome`: A boolean flag to control the display of a welcome message.
    - **`useEffect` Hook:** Used to check if it's the user's first visit and display a welcome message accordingly.  It interacts with `localStorage` to persist this information.
    - **Event Handlers:**  Functions like `onImageProcess`, `onCaptionSelect`, `setBrandName`, `setIsMobilePreview` are passed as props to child components to handle events and update the application's state.

3. **Dependencies and Relationships:**

    - **Imports & Usage:** Imports `react`, `Header`, `VisualsGenerator`, `CaptionGenerator`, and `PreviewPanel` components.
    - **Code Relationships:** This file acts as the central hub, coordinating the interaction between different components. It passes data and event handlers to its child components.

4. **Usage Example:** This is the root component rendered by `main.tsx`.

5. **Technical Notes:**

    - The use of React Hooks simplifies state management and side effects.
    - The component structure promotes reusability and separation of concerns.
    - The welcome message logic demonstrates a good practice for user onboarding.

---

<a id='src-index-css'></a>

#### index.css

*Path: src/index.css*

1. **Purpose:** This file serves as the global stylesheet for the application, defining base styles, custom utilities, and responsive design rules. It leverages Tailwind CSS for utility-first styling.

2. **Key Functionality:**

    - Imports Tailwind CSS base, components, and utilities.
    - Defines custom styles for scrollbars, smooth scrolling, mobile optimizations, focus states, loading shimmer effects, touch targets, safe area handling, image drag prevention, and transitions.
    - Uses media queries for responsive design adjustments.

3. **Dependencies and Relationships:**

    - **Imports & Usage:** Imports Tailwind CSS directives (`@tailwind base`, `@tailwind components`, `@tailwind utilities`).
    - **Code Relationships:** This file's styles are applied globally to all components in the application.

4. **Usage Example:**  N/A (CSS files are not executed).

5. **Technical Notes:**

    - The use of Tailwind CSS provides a highly maintainable and efficient way to style the application.
    - The inclusion of custom styles and utilities enhances the default Tailwind styles to meet specific design requirements.

---

<a id='src-main-tsx'></a>

#### main.tsx

*Path: src/main.tsx*

1. **Purpose:** This file is the entry point of the application. It renders the root `App` component within an `ErrorBoundary` and mounts it to the DOM.

2. **Key Functionality:**

    - Imports `React`, `ReactDOM`, `App`, `ErrorBoundary`, and the main CSS file.
    - Creates a React root using `ReactDOM.createRoot`.
    - Renders the `App` component wrapped in an `ErrorBoundary` to handle potential runtime errors gracefully.
    - Uses `React.StrictMode` for additional checks and warnings during development.

3. **Dependencies and Relationships:**

    - **Imports & Usage:** Imports `react`, `react-dom/client`, `App`, `ErrorBoundary`, and `./index.css`.
    - **Code Relationships:** This file bootstraps the application by rendering the root component and attaching it to the DOM. It depends on the `App` component and the global styles defined in `index.css`.

4. **Usage Example:** This is the entry point, executed when the application starts.

5. **Technical Notes:**

    - The use of `ErrorBoundary` is a crucial best practice for handling unexpected errors and preventing application crashes.
    - `React.StrictMode` helps identify potential issues and encourages best practices during development.

---

<a id='src-vite-env-d-ts'></a>

#### vite-env.d.ts

*Path: src/vite-env.d.ts*

1. **Purpose:** This file provides TypeScript type definitions for Vite-specific environment variables.

2. **Key Functionality:**

    - Includes a triple-slash directive (`/// <reference types="vite/client" />`) to import type definitions from the `vite/client` module. This ensures that TypeScript recognizes Vite-specific environment variables like `import.meta.env`.

3. **Dependencies and Relationships:**

    - **Imports & Usage:** Imports type definitions from `vite/client`.
    - **Code Relationships:** This file is essential for using Vite environment variables within the TypeScript codebase.

4. **Usage Example:**  N/A (Type definition files do not contain executable code).

5. **Technical Notes:** This file is crucial for type safety when working with Vite environment variables in a TypeScript project.


**Overall System Architecture and Relationships:**

The files work together to create a React application built with Vite. `main.tsx` is the entry point, rendering the `App.tsx` component. `App.tsx` acts as the main container, managing the application's state and rendering child components like `VisualsGenerator`, `CaptionGenerator`, and `PreviewPanel`.  `App.css` provides the styling for the application, while `index.css` imports global styles and Tailwind CSS configurations. `vite-env.d.ts` ensures correct type definitions for Vite environment variables. The `ErrorBoundary` in `main.tsx` provides a mechanism for handling runtime errors gracefully.  The application uses a combination of custom CSS and a CSS framework (likely Tailwind CSS) for styling and layout.  The use of React Hooks in `App.tsx` simplifies state management and side effects. The project structure promotes component reusability and separation of concerns.

---

### src/components

<a id='src-components-errorboundary-tsx'></a>

#### ErrorBoundary.tsx

*Path: src/components/ErrorBoundary.tsx*

1. **Purpose:** This file defines a React component, `ErrorBoundary`, designed to catch and display errors that occur within its child components, preventing the entire application from crashing. It enhances the user experience by providing a fallback UI during runtime errors.

2. **Key Functionality:**

- **`ErrorBoundary` Class:** This class extends `React.Component` and implements error boundary logic.
    - **`constructor(props: Props)`:** Initializes the component's state with `hasError: false`.
    - **`static getDerivedStateFromError(error: Error)`:** A static method that's called after an error is thrown by a descendant component. It receives the error object as an argument and updates the component's state to reflect the error, setting `hasError` to `true` and storing the error object.  Returns an object to update the state.
    - **`render()`:**  Renders the children if no error has occurred (`this.state.hasError` is false). If an error has been caught, it renders a styled `div` containing an error message derived from the caught error object.

3. **Dependencies and Relationships:**

- **Imports & Usage:** Imports `React` from the 'react' library, essential for defining React components and using JSX.
- **Code Relationships:** This component is intended to be used as a wrapper around other components that might throw errors. It isolates potential failures and prevents them from propagating up the component tree.

4. **Usage Example:**

```jsx
<ErrorBoundary>
  <PotentiallyFailingComponent />
</ErrorBoundary>
```

This example demonstrates how `ErrorBoundary` wraps `PotentiallyFailingComponent`. If `PotentiallyFailingComponent` throws an error during rendering, `ErrorBoundary` will catch it and display the error message instead of crashing the application.  It would typically be used higher up in the component tree to provide a broader safety net.

5. **Technical Notes:**

- This component utilizes the standard React error boundary mechanism introduced in React 16.  It relies on the `getDerivedStateFromError` lifecycle method to capture errors and the `render` method to display fallback UI.
- The error boundary only catches errors during rendering, in event handlers, and in lifecycle methods of the component below it in the tree. It does not catch errors during server-side rendering, or in the constructor of the component itself.

---

### src/components/Generators

<a id='src-components-generators-captiongenerator-tsx'></a>

#### CaptionGenerator.tsx

*Path: src/components/Generators/CaptionGenerator.tsx*

1. **Purpose:** This React component provides a form for generating captions based on user-provided brand context. It interacts with an external API (mocked in the provided code) to generate relevant captions.

2. **Key Functionality:**

- **`CaptionGenerator` (functional component):**
    - **`onCaptionSelect` (prop):** A callback function of type `(caption: string) => void` that is called when a user selects a generated caption.  It receives the selected caption string as an argument.
    - **`brandName` (prop):**  A string representing the brand name.  Currently unused in the provided code.
    - **`loading` (state):** A boolean state variable indicating whether the caption generation process is in progress.
    - **`brandContext` (state):** A string state variable storing the user-provided brand context.
    - **`captions` (state):** An array of strings storing the generated captions. Initialized with default placeholder captions.
    - **`error` (state):** A string or null state variable storing any error messages during caption generation.
    - **`generateCaptions` (function):** An async function that handles caption generation. It validates `brandContext`, makes an API call (mocked), updates the `captions` state, and handles loading and error states.  Uses mock data based on `brandContext` in the absence of a real API integration.
    - **JSX structure:**  Renders a form with a textarea for `brandContext`, a button to trigger `generateCaptions`, and a list of generated captions.  Uses `SkeletonText` component for loading state and displays error messages if present.

3. **Dependencies and Relationships:**

- **Imports & Usage:**
    - `useState` from React for managing state.
    - `SkeletonText` from `../UI/Skeleton` for displaying loading skeletons.
- **Code Relationships:** This component is likely used within a larger application flow related to content creation. It receives the `onCaptionSelect` prop, which suggests interaction with other components that handle the selected caption.

4. **Usage Example:**

```tsx
import CaptionGenerator from './CaptionGenerator';

function MyComponent() {
  const handleCaptionSelect = (caption: string) => {
    console.log("Selected caption:", caption);
    // ... further processing of the selected caption
  };

  return (
    <CaptionGenerator onCaptionSelect={handleCaptionSelect} brandName="MyBrand" />
  );
}
```

5. **Technical Notes:**

- The current implementation uses mock data for captions. Integration with the Gemini API is pending.
- Error handling is implemented with a `try...catch` block and displayed to the user.
- Loading state is managed with the `loading` state variable and visually represented with `SkeletonText`.

---

<a id='src-components-generators-visualsgenerator-tsx'></a>

#### VisualsGenerator.tsx

*Path: src/components/Generators/VisualsGenerator.tsx*

1. **Purpose:** This React component allows users to upload an image, select a background, and process the image by removing its background and combining it with the chosen background.  It interacts with image processing and background retrieval services.

2. **Key Functionality:**

- **`VisualsGenerator` (functional component):**
    - **`onImageProcess` (prop):** A callback function of type `(image: { original: string, processed: string }) => void` that is called when an image is processed (uploaded or background applied). It receives an object containing the original and processed image URLs.
    - **`isMobilePreview` (prop):** A boolean prop indicating whether the preview should be rendered in mobile view. Currently unused.
    - **`loading` (state):**  Boolean, indicates loading state.
    - **`uploadedImage` (state):** String or null, URL of the uploaded image.
    - **`processedImage` (state):** String or null, URL of the processed image (after background removal).
    - **`backgrounds` (state):** Array of `Background` objects, fetched from the API.
    - **`selectedBackground` (state):**  `Background` object or null, currently selected background.
    - **`error` (state):** String or null, error message.
    - **`selectedCategory` (state):** Object representing the selected background category.
    - **`isMobileView` (state):** Boolean, controls mobile view display.
    - **`useEffect` hook:** Fetches initial backgrounds on component mount and when `selectedCategory` changes.
    - **`handleImageUpload` (function):** Handles image uploads, sets `uploadedImage`, calls `onImageProcess` with the original image, and resets `processedImage`.
    - **`handleBackgroundSelect` (function):** Handles background selection, calls image processing services, updates `processedImage`, and calls `onImageProcess` with the processed image.
    - **`loadMoreBackgrounds` (function):** Fetches more backgrounds from the API and appends them to the `backgrounds` state.
    - **JSX structure:** Renders an `ImageUploader`, background category selection, a grid of background thumbnails, a "Load more" button, and error messages.  Uses `LoadingPreview` during image processing.

3. **Dependencies and Relationships:**

- **Imports & Usage:**
    - `useState`, `useEffect` from React.
    - `ImageUploader` from `../UI/ImageUploader`.
    - `LoadingPreview` from `../UI/LoadingPreview`.
    - `imageService`, `backgroundService` from `../../services/api` for interacting with backend APIs.
    - `Background` type from `../../types`.
- **Code Relationships:** This component interacts with the `CaptionGenerator` as part of a larger content creation flow.  It receives an uploaded image and processes it, sending the result via the `onImageProcess` callback to potentially be used in conjunction with generated captions.

4. **Usage Example:**

```tsx
import VisualsGenerator from './VisualsGenerator';

function MyComponent() {
  const handleImageProcess = (image: { original: string, processed: string }) => {
    console.log("Original image:", image.original);
    console.log("Processed image:", image.processed);
    // ... further processing of the processed image
  };

  return (
    <VisualsGenerator onImageProcess={handleImageProcess} isMobilePreview={false} />
  );
}
```

5. **Technical Notes:**

- The component uses external API services (`imageService`, `backgroundService`) for image processing and background retrieval.
- Error handling is implemented with `try...catch` blocks.
- Loading states are managed and visually indicated using the `loading` state and `LoadingPreview` component.
- The `BACKGROUND_CATEGORIES` constant defines the available background categories and their associated search queries.


**Inter-file Relationships:**  `CaptionGenerator` and `VisualsGenerator` are designed to work together within a larger content creation workflow.  `CaptionGenerator` provides text captions, while `VisualsGenerator` handles image processing and background selection.  They communicate indirectly through a parent component that would manage the overall workflow and pass data between them (e.g., passing the selected caption from `CaptionGenerator` to a component that also uses the processed image from `VisualsGenerator`).  They don't directly depend on each other but contribute to the same overall functionality.

---

### src/components/Layout

<a id='src-components-layout-header-tsx'></a>

#### Header.tsx

*Path: src/components/Layout/Header.tsx*

1. **Purpose:** This component renders the header section of the application, displaying the application's logo and title. It provides a consistent top bar across different pages.

2. **Key Functionality:**

- **`Header()`:** This functional component renders the header structure. It uses Tailwind CSS for styling.  It returns the JSX structure for the header.
    - **Parameters:** None
    - **Return Type:** `JSX.Element`

- **`ChromapostIcon`:** This component (imported from `../UI/ChromapostIcon`) renders the application's icon within the header.  Its implementation details are not provided in this file.

3. **Dependencies and Relationships:**

- **Imports & Usage:** Imports `ChromapostIcon` from `../UI/ChromapostIcon`.
- **Code Relationships:** This component is likely used within a layout component that structures the overall page layout.

4. **Usage Example:**

This component would be used within a layout component like so:

```tsx
import Header from './Header';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
```

5. **Technical Notes:**  Uses Tailwind CSS for styling, promoting maintainability and consistency in design.

---

<a id='src-components-layout-logo-tsx'></a>

#### Logo.tsx

*Path: src/components/Layout/Logo.tsx*

1. **Purpose:** This component renders the logo for the "Admaker" application, combining an SVG graphic with text.

2. **Key Functionality:**

- **`Logo()`:** This functional component renders the logo.
    - **Parameters:** None
    - **Return Type:** `JSX.Element`
- The logo consists of an SVG with a rounded rectangle and the letter "L" inside, followed by the text "Admaker."

3. **Dependencies and Relationships:**

- **Imports & Usage:** No external dependencies.
- **Code Relationships:** This component is likely used within the `Header` component or other parts of the application where the logo needs to be displayed.  It's related to File 1 (Header.tsx) as it's likely a child component of the header.

4. **Usage Example:**

```tsx
import Logo from './Logo';

function SomeComponent() {
  return (
    <div>
      <Logo />
      {/* ... other content */}
    </div>
  );
}
```

5. **Technical Notes:** The logo is self-contained within this component, making it easily reusable across the application.  The use of SVG ensures scalability and crisp rendering across different screen resolutions.

---

<a id='src-components-layout-sidebar-tsx'></a>

#### Sidebar.tsx

*Path: src/components/Layout/Sidebar.tsx*

1. **Purpose:** This component renders a collapsible sidebar containing navigation links.  It manages the active tab state and handles tab switching.

2. **Key Functionality:**

- **`Sidebar({ activeTab, onTabChange })`:** This functional component renders the sidebar.
    - **Parameters:**
        - `activeTab`: (string) The currently active tab's ID.
        - `onTabChange`: (function) Callback function to update the active tab. Takes the new tab's ID as an argument.
    - **Return Type:** `JSX.Element`
- **`useState` for `isCollapsed`:** Manages the collapsed state of the sidebar.
- **`menuItems` array:** Defines the navigation links, their icons, and IDs.
- Event handlers update the `activeTab` state via the `onTabChange` callback.

3. **Dependencies and Relationships:**

- **Imports & Usage:** Imports `useState` from React.
- **Code Relationships:** This component is a core part of the application's layout, likely used alongside the `Header` component (File 1) and within a main layout structure.  It controls navigation within the application.

4. **Usage Example:**

```tsx
import Sidebar from './Sidebar';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('caption');

  return (
    <div className="flex">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      {/* ... content based on activeTab */}
    </div>
  );
}
```

5. **Technical Notes:** The sidebar uses conditional rendering and CSS transitions for smooth collapsing/expanding behavior.  The component structure is well-organized, separating the collapse toggle, navigation links, and footer.  The use of an interface (`SidebarProps`) improves type safety and code clarity.  The component manages its internal state (`isCollapsed`) and communicates with parent components through the `onTabChange` callback, demonstrating good component design principles.

---

### src/components/Navigation

<a id='src-components-navigation-tabnav-tsx'></a>

#### TabNav.tsx

*Path: src/components/Navigation/TabNav.tsx*

1. **Purpose:** This React component renders a navigation bar with tabs for switching between different sections of the application, specifically "Generate visuals" and "Generate caption".  It manages the active tab state and handles user interactions to change tabs.

2. **Key Functionality:**

- **`TabNav` (functional component):**
    - **Parameters:**
        - `activeTab` (string):  The currently active tab's identifier.
        - `onTabChange` (function): A callback function to be executed when a tab is clicked.  Accepts the new tab's identifier (string) as an argument.
    - **Return Type:** JSX.Element (representing the rendered tab navigation).
    - **Implementation:** Renders two buttons, each representing a tab.  The `activeTab` prop determines which tab is visually highlighted with a border.  Clicking a button triggers the `onTabChange` callback with the corresponding tab identifier.  Uses Tailwind CSS for styling.

3. **Dependencies and Relationships:**

- **Imports & Usage:**
    - `React`:  Uses core React library for functional component definition and JSX.
    - `TabNavProps` interface: Defines the type for the component's props.
- **Code Relationships:** This component is likely used within a parent component that manages the overall application state, including the active tab. The parent component would pass the `activeTab` as a prop and provide the `onTabChange` callback to handle tab switching logic.

4. **Usage Example:**

```jsx
import TabNav from './TabNav';
import { useState } from 'react';

function ParentComponent() {
  const [activeTab, setActiveTab] = useState('visuals');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <TabNav activeTab={activeTab} onTabChange={handleTabChange} />
      {/* Content based on activeTab */}
      {activeTab === 'visuals' && <VisualsComponent />}
      {activeTab === 'caption' && <CaptionComponent />}
    </div>
  );
}
```

This example demonstrates how `TabNav` is integrated within a parent component. The parent manages the `activeTab` state and passes it down to `TabNav`.  The `handleTabChange` function updates the `activeTab` state when a tab is clicked, which in turn re-renders the `TabNav` and the appropriate content based on the selected tab.

5. **Technical Notes:**

- The component uses inline styles with Tailwind CSS classes for conciseness.  This approach can be refactored to use separate CSS modules or styled-components for improved maintainability if the styling becomes more complex.
- The component uses a simple conditional rendering approach based on the `activeTab` prop.  For more complex navigation scenarios, consider using a routing library like React Router.
- The `scrollbar-hide` class suggests an intention to hide the horizontal scrollbar. Ensure this aligns with the overall UX design and accessibility considerations.

---

### src/components/Preview

<a id='src-components-preview-previewpanel-tsx'></a>

#### PreviewPanel.tsx

*Path: src/components/Preview/PreviewPanel.tsx*

1. **Purpose:** This React component provides a preview of an image with various layout and effect options, allowing users to visualize and download the processed image for different social media platforms. It manages the preview display, user interactions related to preview customization, and the image download process.

2. **Key Functionality:**

- **`PreviewPanel` (functional component):**
    - **`originalImage` (string | undefined):** The original uploaded image URL.
    - **`processedImage` (string | undefined):** The processed image URL (after applying effects).
    - **`caption` (string):** The caption text to overlay on the image.
    - **`brandName` (string):** The user's brand name.
    - **`setBrandName` (function):**  A function to update the brand name.
    - **`isMobilePreview` (boolean):** Flag to toggle mobile preview layout.
    - **`setIsMobilePreview` (function):** Function to toggle `isMobilePreview`.
    - **Return:** JSX representing the preview panel.
    - **Implementation:** Manages the preview state (selected layout, effect, brand name) and renders the preview image with selected options. Handles download functionality, including brand name validation and dynamic filename generation.  Uses React hooks (`useState`) for state management.
    - **Fallback Mechanism:** Displays a placeholder message if `originalImage` is not provided. Validates `brandName` before download and displays an error message if it's empty.

- **`handleDownload` (function):**
    - **Parameters:** None
    - **Return:** None
    - **Implementation:** Creates a downloadable link with the processed image and a dynamically generated filename based on brand name, platform, and timestamp.  Handles brand name validation and error display.

- **`PREVIEW_LAYOUTS` (constant):** An array of objects defining available preview layouts (Instagram Post, Story, WhatsApp Status, Facebook Post, Reel). Each object contains `id`, `name`, `aspectRatio`, `width`, and `platform` properties.

- **`EFFECTS` (constant):** An array of objects defining image effects. Each object contains `id`, `name`, and optionally a `filter` property for CSS filter styles.

3. **Dependencies and Relationships:**

- **Imports & Usage:** Imports `useState` from React for state management and platform-specific icons from `../UI/Icons`.
- **Code Relationships:** This component is likely used within a parent component responsible for image upload and processing. It relies on the parent component to provide the `originalImage`, `processedImage`, and `caption` props.

4. **Usage Example:**

```jsx
// Within a parent component
<PreviewPanel
  originalImage={uploadedImageURL}
  processedImage={processedImageURL}
  caption={captionText}
  brandName={brandName}
  setBrandName={handleBrandNameChange}
  isMobilePreview={isMobileView}
  setIsMobilePreview={toggleMobileView}
/>
```

5. **Technical Notes:**

- The component uses CSS modules for styling (implied by the relative import path for icons).
- The `scrollbar-hide` class suggests a custom scrollbar implementation.
- Dynamic filename generation ensures unique filenames for downloaded images.
- The component directly manipulates the DOM to trigger the download, a common practice for client-side downloads.
- The brand name validation adds a layer of user experience improvement.
- The use of constants for `PREVIEW_LAYOUTS` and `EFFECTS` promotes maintainability and code clarity.
- The toggle switch for mobile/desktop preview enhances user experience by allowing users to preview content in different viewports.
- The component efficiently uses conditional rendering to display platform-specific icons and the caption overlay.
- The use of CSS filters provides a simple way to apply visual effects to the image.


This documentation provides a comprehensive technical overview of the `PreviewPanel` component, its functionality, dependencies, and how it integrates within a larger application. It highlights key implementation details, error handling, and user interaction logic.

---

### src/components/UI

<a id='src-components-ui-chromaposticon-tsx'></a>

#### ChromapostIcon.tsx

*Path: src/components/UI/ChromapostIcon.tsx*

1. **Purpose:** This file defines a reusable React component for the Chromapost application icon. It renders an SVG icon with a specific design, including a purple circle and white paths.

2. **Key Functionality:**

- **`ChromapostIcon` (functional component):**
    - **Parameters:**
        - `className` (optional): A string representing additional CSS classes to apply to the SVG element. Defaults to "w-8 h-8".
    - **Return Type:** `JSX.Element` (the rendered SVG icon).
    - **Implementation:** The component directly returns the JSX representation of the SVG icon. The `className` prop allows for customization of the icon's size and appearance through external CSS.

3. **Dependencies and Relationships:**

- **Imports & Usage:** This component imports React and uses JSX for rendering. It has no external library dependencies other than React.
- **Code Relationships:** This icon component is likely used across the application wherever the Chromapost logo needs to be displayed.

4. **Usage Example:**

```tsx
import { ChromapostIcon } from './ChromapostIcon';

const MyComponent = () => {
  return (
    <header>
      <ChromapostIcon className="w-6 h-6" />
    </header>
  );
};
```

5. **Technical Notes:**  None.

---

<a id='src-components-ui-errormessage-tsx'></a>

#### ErrorMessage.tsx

*Path: src/components/UI/ErrorMessage.tsx*

1. **Purpose:** This file defines a reusable React component for displaying error messages to the user.

2. **Key Functionality:**

- **`ErrorMessage` (functional component):**
    - **Parameters:**
        - `message`: A string representing the error message to display.
    - **Return Type:** `JSX.Element` (the rendered error message).
    - **Implementation:** The component renders a styled `div` containing the error message. The styling includes a red background, border, and text color to visually indicate an error.

3. **Dependencies and Relationships:**

- **Imports & Usage:** This component imports React and uses JSX for rendering. It has no external library dependencies other than React.
- **Code Relationships:** This component is likely used by other components to display errors resulting from API calls, form validations, or other operations.

4. **Usage Example:**

```tsx
import ErrorMessage from './ErrorMessage';

const MyComponent = ({ error }: { error?: string }) => {
  return (
    {error && <ErrorMessage message={error} />}
  );
};
```

5. **Technical Notes:** None.

---

<a id='src-components-ui-icons-tsx'></a>

#### Icons.tsx

*Path: src/components/UI/Icons.tsx*

1. **Purpose:** This file defines reusable React components for various social media icons (Instagram, Facebook, WhatsApp).

2. **Key Functionality:**

- **`InstagramIcon`, `FacebookIcon`, `WhatsappIcon` (functional components):**
    - **Parameters:**
        - `className` (optional): A string representing additional CSS classes to apply to the SVG element. Defaults to "w-6 h-6".
    - **Return Type:** `JSX.Element` (the rendered SVG icon).
    - **Implementation:** Each component directly returns the JSX representation of the respective SVG icon.  The `className` prop allows customization of size and appearance.

3. **Dependencies and Relationships:**

- **Imports & Usage:** This component imports React and uses JSX for rendering. It has no external library dependencies other than React.
- **Code Relationships:** These icon components are likely used across the application in areas like social sharing or profile linking.

4. **Usage Example:**

```tsx
import { InstagramIcon, FacebookIcon, WhatsappIcon } from './Icons';

const SocialLinks = () => (
  <div>
    <InstagramIcon />
    <FacebookIcon />
    <WhatsappIcon />
  </div>
);
```

5. **Technical Notes:** None.

---

<a id='src-components-ui-imageuploader-tsx'></a>

#### ImageUploader.tsx

*Path: src/components/UI/ImageUploader.tsx*

1. **Purpose:** This file defines a reusable React component for uploading images. It provides a user interface for selecting an image file and triggers a callback function when an image is selected.

2. **Key Functionality:**

- **`ImageUploader` (functional component):**
    - **Parameters:**
        - `onUpload`: A callback function that receives the selected `File` object as an argument.
    - **Return Type:** `JSX.Element` (the rendered image uploader).
    - **Implementation:** The component renders a hidden file input element and a label that triggers the file selection dialog. When a file is selected, the `handleFileChange` function is called, which in turn calls the `onUpload` callback with the selected file.

3. **Dependencies and Relationships:**

- **Imports & Usage:** This component imports React and uses JSX for rendering. It has no external library dependencies other than React.
- **Code Relationships:** This component is likely used in areas of the application where users can upload images, such as profile creation or post creation.

4. **Usage Example:**

```tsx
import ImageUploader from './ImageUploader';

const MyComponent = () => {
  const handleImageUpload = (file: File) => {
    // Handle the uploaded file (e.g., upload to server)
    console.log('Uploaded file:', file);
  };

  return (
    <ImageUploader onUpload={handleImageUpload} />
  );
};
```

5. **Technical Notes:** None.

---

<a id='src-components-ui-loadingpreview-tsx'></a>

#### LoadingPreview.tsx

*Path: src/components/UI/LoadingPreview.tsx*

1. **Purpose:** This file defines a React component that displays a loading animation while an image is being processed.

2. **Key Functionality:**

- **`LoadingPreview` (functional component):**
    - **Parameters:** None
    - **Return Type:** `JSX.Element` (the rendered loading preview).
    - **Implementation:** The component renders a full-screen overlay with a centered loading spinner and text indicating that the image is being processed.  The spinner is implemented using CSS animations.

3. **Dependencies and Relationships:**

- **Imports & Usage:** This component imports React and uses JSX for rendering. It has no external library dependencies other than React.
- **Code Relationships:** This component is likely used in conjunction with the `ImageUploader` component to provide feedback to the user while their uploaded image is being processed.

4. **Usage Example:**  See `ImageUploader` context.

5. **Technical Notes:** None.

---

<a id='src-components-ui-loadingspinner-tsx'></a>

#### LoadingSpinner.tsx

*Path: src/components/UI/LoadingSpinner.tsx*

1. **Purpose:** This file defines a simple React component for a loading spinner.

2. **Key Functionality:**

- **`LoadingSpinner` (functional component):**
    - **Parameters:** None
    - **Return Type:** `JSX.Element` (the rendered loading spinner).
    - **Implementation:** The component renders a spinning animation using CSS animations applied to a `div` element.

3. **Dependencies and Relationships:**

- **Imports & Usage:** This component imports React and uses JSX for rendering. It has no external library dependencies other than React.
- **Code Relationships:** This component can be used anywhere in the application where a loading indicator is needed.

4. **Usage Example:**

```tsx
import LoadingSpinner from './LoadingSpinner';

const MyComponent = ({ isLoading }: { isLoading: boolean }) => {
  return (
    {isLoading && <LoadingSpinner />}
  );
};
```

5. **Technical Notes:** None.

---

<a id='src-components-ui-skeleton-tsx'></a>

#### Skeleton.tsx

*Path: src/components/UI/Skeleton.tsx*

1. **Purpose:** This file defines reusable React components for displaying skeleton loader placeholders.  These are used to represent the loading state of content before it is fully loaded.

2. **Key Functionality:**

- **`Skeleton` (functional component):**
    - **Parameters:**
        - `className` (optional): A string representing additional CSS classes.
    - **Return Type:** `JSX.Element` (a styled `div` acting as a placeholder).
    - **Implementation:** Renders a `div` with background color and rounded corners, styled to appear as a content placeholder.  The `animate-pulse` class applies a pulsing animation.

- **`SkeletonText` (functional component):**
    - **Parameters:**
        - `width` (optional): A string representing the width of the text placeholder. Defaults to "100%".
    - **Return Type:** `JSX.Element` (a text placeholder).
    - **Implementation:**  Renders a `div` styled to represent a line of text.  The `width` prop controls the width of the placeholder.

- **`SkeletonImage` (functional component):**
    - **Parameters:** None
    - **Return Type:** `JSX.Element` (an image placeholder).
    - **Implementation:** Renders a `div` styled to represent an image placeholder.

3. **Dependencies and Relationships:**

- **Imports & Usage:** This component imports React and uses JSX for rendering. It has no external library dependencies other than React.
- **Code Relationships:** These components are used throughout the application to improve the perceived loading performance by showing placeholders while data is being fetched.

4. **Usage Example:**

```tsx
import Skeleton, { SkeletonText, SkeletonImage } from './Skeleton';

const MyComponent = ({ isLoading }: { isLoading: boolean }) => {
  return isLoading ? (
    <div>
      <SkeletonImage />
      <SkeletonText width="60%" />
      <Skeleton className="h-4 w-full mt-2" />
    </div>
  ) : (
    // Render actual content
  );
};
```

5. **Technical Notes:** The styling for these components likely relies on CSS classes defined externally (e.g., `skeleton-text`, `skeleton-image`).  This keeps the component code clean and allows for customization through CSS.


**Overall System Relationships:**

The provided files represent a collection of reusable UI components for the Chromapost application.  They are designed to be independent and composable, allowing developers to easily integrate them into different parts of the application.  The `ChromapostIcon` provides branding, `ErrorMessage` handles error display, `Icons` provides social media icons, `ImageUploader` facilitates image uploads (potentially using `LoadingPreview` during processing), `LoadingSpinner` offers a generic loading indicator, and `Skeleton` components improve perceived loading performance.  These components work together to create a consistent user experience.

---

### src/services

<a id='src-services-api-ts'></a>

#### api.ts

*Path: src/services/api.ts*

1. **Purpose:** This file defines API interaction logic for image manipulation, background fetching, and caption generation. It centralizes API calls and handles responses, providing an abstraction layer for other components.

2. **Key Functionality:**

- **`imageService`**:
    - **`removeBackground(imageUrl: string): Promise<string>`**: Removes the background from an image using the remove.bg API.
        - **Parameters:** `imageUrl` (string): URL of the image to process.
        - **Return Type:** `Promise<string>`: Resolves with a data URL of the image with the background removed.
        - **Implementation:** Converts the image URL to a Blob, sends it to the remove.bg API, and returns the result as a data URL. Includes error handling with a try-catch block.
    - **`combineWithBackground(foregroundUrl: string, backgroundUrl: string): Promise<string>`**: Combines a foreground image with a background image.
        - **Parameters:** `foregroundUrl` (string), `backgroundUrl` (string): URLs of the foreground and background images.
        - **Return Type:** `Promise<string>`: Resolves with a data URL of the combined image.
        - **Implementation:** Uses HTML5 Canvas API to draw the background and foreground images onto a canvas, maintaining aspect ratio and centering. Returns the result as a data URL. Includes error handling and utilizes Promises for asynchronous image loading.

- **`backgroundService`**:
    - **`getRandomBackgrounds(query: string = 'background texture'): Promise<Background[]>`**: Fetches random background images from Unsplash or Pixabay.
        - **Parameters:** `query` (string, optional): Search query for background images. Defaults to 'background texture'.
        - **Return Type:** `Promise<Background[]>` : Resolves with an array of `Background` objects, each containing `id`, `url`, `thumb`, and `credit` properties.
        - **Implementation:** Primarily uses Unsplash API. Implements a fallback to Pixabay API if Unsplash rate limit is reached (HTTP 429 or 403).  Maps API responses to a consistent `Background` type. Includes comprehensive error handling.

- **`captionService`**:
    - **`generateCaptions(brandContext: string): Promise<string[]>`**: Generates captions based on brand context. (Currently mocked).
        - **Parameters:** `brandContext` (string): The brand context for caption generation.
        - **Return Type:** `Promise<string[]>`: Resolves with an array of generated captions.
        - **Implementation:** Placeholder for Gemini API integration. Currently returns mock captions based on the provided `brandContext`. Includes error handling.

3. **Dependencies and Relationships:**

- **Imports & Usage:**
    - `axios`: Used for making HTTP requests to the various APIs.
    - `Background` type from `../types`: Defines the structure of background image data.
- **Code Relationships:** This file is used by components that require image processing, background fetching, and caption generation. It interacts with external APIs (remove.bg, Unsplash, Pixabay, and potentially Gemini).

4. **Usage Example:**

```typescript
import { imageService, backgroundService } from './services/api'

async function processImage(imageUrl: string) {
  const noBgImage = await imageService.removeBackground(imageUrl)
  const backgrounds = await backgroundService.getRandomBackgrounds('nature')
  const combinedImage = await imageService.combineWithBackground(noBgImage, backgrounds[0].url)
  // ... use the combinedImage ...
}
```

5. **Technical Notes:**

- The `combineWithBackground` function uses the HTML5 Canvas API for client-side image manipulation, which can be more efficient than server-side processing for certain use cases.
- The `getRandomBackgrounds` function demonstrates a robust fallback mechanism for API rate limiting, ensuring a higher level of availability.
- The `captionService` is currently mocked, but designed for future integration with the Gemini API.
- API keys are loaded from environment variables using `import.meta.env`, which is a standard practice for managing sensitive information.  CORS handling is implemented in `combineWithBackground` using `img.crossOrigin = 'anonymous'`. This is crucial for loading images from different domains and avoiding cross-origin resource sharing errors.

---

### src/types

<a id='src-types-index-ts'></a>

#### index.ts

*Path: src/types/index.ts*

1. **Purpose:** This file defines the `Background` interface, which represents the structure for background image data used within the application. It centralizes the type definition for backgrounds.

2. **Key Functionality:**

- **`Background` Interface:**
    - `id`: (`string | number`) Unique identifier for the background.
    - `url`: (`string`) URL of the full-size background image.
    - `thumb`: (`string`) URL of a thumbnail version of the background image.
    - `credit`: (`string`) Attribution or credit information for the background image source.

    This interface ensures type safety and consistency when working with background data throughout the application.  No functions or methods are present, as this file solely defines a data structure.

3. **Dependencies and Relationships:**

- This file is a dependency for any component or module that uses background image data.  It establishes a consistent data contract.  File 2, `src/types/preview.ts`, does *not* directly depend on this file.

4. **Usage Example:**

```typescript
import { Background } from './types';

const background: Background = {
  id: 123,
  url: '/images/background.jpg',
  thumb: '/images/background-thumb.jpg',
  credit: 'Unsplash',
};
```

5. **Technical Notes:**  The use of a TypeScript interface enforces type checking and improves code maintainability by providing a clear definition of the expected data structure for backgrounds.

---

<a id='src-types-preview-ts'></a>

#### preview.ts

*Path: src/types/preview.ts*

1. **Purpose:** This file defines types and data related to preview layouts for different social media platforms. It provides a structured way to represent the dimensions and characteristics of various preview layouts.

2. **Key Functionality:**

- **`PreviewLayout` Type:**
    - `id`: (`string`) Unique identifier for the layout.
    - `name`: (`string`) Human-readable name of the layout.
    - `width`: (`number`) Width of the preview in pixels.
    - `height`: (`number`) Height of the preview in pixels.
    - `platform`: (`'Instagram' | 'Facebook'`) Social media platform.
    - `type`: (`'Story' | 'Post' | 'Reel'`) Content type.

- **`PREVIEW_LAYOUTS` Constant:**  An array of `PreviewLayout` objects, providing predefined layout configurations for different platforms and content types.  This acts as a central repository of supported preview layouts.

3. **Dependencies and Relationships:**

- This file depends on the core TypeScript library for type definitions.
- Components or modules responsible for generating or displaying previews would depend on this file to access the layout information.  It does *not* depend on File 1, `src/types/index.ts`.

4. **Usage Example:**

```typescript
import { PREVIEW_LAYOUTS } from './preview';

const instagramStoryLayout = PREVIEW_LAYOUTS.find(layout => layout.id === 'instagram-story');

if (instagramStoryLayout) {
  console.log(`Instagram Story dimensions: ${instagramStoryLayout.width}x${instagramStoryLayout.height}`);
}
```

5. **Technical Notes:**  Centralizing preview layout configurations in `PREVIEW_LAYOUTS` promotes maintainability and consistency.  Adding new layouts or modifying existing ones becomes easier and less error-prone.  The use of a TypeScript type and a constant array ensures type safety and avoids accidental modification of the predefined layouts.

---

