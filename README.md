<<<<<<< HEAD
# ai-workflow-operator
=======
# AI Workflow Operator

Mastering AI Workflow Architecture: Identifying fit, designing agentic loops, and measuring real operational impact.

## Local Development

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Configure Environment**:
    -   Copy `.env.example` to `.env`.
    -   Set `VITE_AI_PROVIDER` to your desired provider (default is `mock`).
    -   Provide the necessary API keys if using `google`, `openai`, or `anthropic`.

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

4.  **Build for Production**:
    ```bash
    npm run build
    ```

## AI Integration

All AI calls in this application are isolated behind a single adapter: `src/services/aiProvider.ts`.

-   **Provider Switching**: You can switch between providers by changing the `VITE_AI_PROVIDER` environment variable.
-   **Safe Removal**: Google/Gemini code is contained within the adapter. If you wish to remove Google dependencies, you only need to modify `src/services/aiProvider.ts` and remove the `@google/genai` package from `package.json`.
-   **Mock Fallback**: If keys are missing or a provider fails, the system automatically falls back to a deterministic `mock` provider to ensure the UI remains functional.

## Project Structure

-   `src/components/`: UI components for the various framework sections.
-   `src/services/aiProvider.ts`: The single integration surface for AI.
-   `src/App.tsx`: Main application routing and layout.
-   `src/index.css`: Global styles using Tailwind CSS.
>>>>>>> 6cb6507 (Initial commit)
