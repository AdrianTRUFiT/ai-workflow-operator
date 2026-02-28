import { GoogleGenAI } from "@google/genai";

export type AIProvider = "google" | "openai" | "anthropic" | "ollama" | "mock";

export type AIRequest = {
  task: string;
  input: any;
  context?: any;
};

export type AIResponse = {
  text: string;
  meta?: any;
};

/**
 * Single integration surface for all AI calls.
 * This isolates provider-specific logic and allows for safe removal of dependencies.
 */
export async function runAI(req: AIRequest): Promise<AIResponse> {
  const provider = (import.meta.env.VITE_AI_PROVIDER || "mock") as AIProvider;

  try {
    switch (provider) {
      case "google":
        return await runGoogleAI(req);
      case "openai":
        // Placeholder for OpenAI implementation
        throw new Error("OpenAI provider not implemented yet");
      case "anthropic":
        // Placeholder for Anthropic implementation
        throw new Error("Anthropic provider not implemented yet");
      case "ollama":
        // Placeholder for Ollama implementation
        throw new Error("Ollama provider not implemented yet");
      case "mock":
      default:
        return runMockAI(req);
    }
  } catch (error) {
    console.error(`AI Provider (${provider}) failed:`, error);
    console.warn("Falling back to mock provider");
    return runMockAI(req);
  }
}

/**
 * Google Gemini implementation.
 * This is the ONLY place where @google/genai should be used.
 */
async function runGoogleAI(req: AIRequest): Promise<AIResponse> {
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("Google API Key missing");
  }

  const genAI = new GoogleGenAI({ apiKey });
  const model = genAI.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [{ parts: [{ text: `${req.task}\n\nInput: ${JSON.stringify(req.input)}\n\nContext: ${JSON.stringify(req.context || {})}` }] }],
  });

  const response = await model;
  return {
    text: response.text || "No response text",
    meta: { candidateCount: response.candidates?.length },
  };
}

/**
 * Deterministic mock provider for local development and testing.
 */
function runMockAI(req: AIRequest): AIResponse {
  // Simple deterministic response based on task/input
  const inputStr = JSON.stringify(req.input);
  let responseText = `Mock response for task: ${req.task}`;
  
  if (req.task.toLowerCase().includes("audit")) {
    responseText = "Based on the audit framework, we have identified 3 critical bottlenecks in your current AI workflow. Recommendation: Implement context-anchored prompt loops.";
  } else if (req.task.toLowerCase().includes("triage")) {
    responseText = "Triage complete. Revenue leaks detected in lead routing and QA handoffs. Estimated margin recovery: 18%.";
  }

  return {
    text: responseText,
    meta: { provider: "mock", timestamp: new Date().toISOString() },
  };
}
