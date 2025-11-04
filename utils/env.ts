export function getGeminiApiKey(): string {
  // Try multiple sources so production builds don't silently pass "undefined"
  const candidates: Array<unknown> = [
    // Vite define replacements (build-time)
    (typeof process !== 'undefined' && (process as any).env && (process as any).env.API_KEY) as unknown,
    (typeof process !== 'undefined' && (process as any).env && (process as any).env.GEMINI_API_KEY) as unknown,
    // Vite runtime env (requires VITE_ prefix to be exposed)
    (typeof import.meta !== 'undefined' && (import.meta as any).env && (import.meta as any).env.VITE_GEMINI_API_KEY) as unknown,
    (typeof import.meta !== 'undefined' && (import.meta as any).env && (import.meta as any).env.VITE_API_KEY) as unknown,
  ];

  const apiKey = candidates.find((v) => typeof v === 'string' && v && v !== 'undefined' && v !== 'null') as string | undefined;
  if (!apiKey) {
    throw new Error('Gemini API key is not configured. Set GEMINI_API_KEY or VITE_GEMINI_API_KEY.');
  }
  return apiKey;
}


