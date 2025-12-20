
import { GoogleGenAI } from "@google/genai";

/**
 * Generates a consultation response for AIYOU visitors.
 * Uses gemini-3-flash-preview for fast, helpful business Q&A.
 */
export const generateConsultationResponse = async (userMessage: string, context: string = "") => {
  // Always initialize with API_KEY from environment variables.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Context: You are the lead consultant for AIYOU Business Group. 
      ${context}
      User Inquiry: ${userMessage}`,
      config: {
        systemInstruction: "You are professional, concise, and helpful. You provide strategic advice about Sino-Russian trade, exhibitions, and market entry. Keep responses under 150 words.",
        temperature: 0.7,
      },
    });
    // Extracting text output directly from GenerateContentResponse property.
    return response.text;
  } catch (error) {
    console.error("AI Consultation Error:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base. Please try again or contact our human team directly.";
  }
};

/**
 * Summarizes blog content for social media previews.
 */
export const summarizeBlogPost = async (postContent: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Summarize the following blog post intro for a quick social media post: ${postContent}`,
    });
    return response.text;
  } catch (error) {
    console.error("AI Summarization Error:", error);
    return null;
  }
};
