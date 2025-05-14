// lib/geminiDirect.ts

// Base URL for Gemini API
const API_BASE_URL = "https://generativelanguage.googleapis.com/v1beta";

// Function to generate a response from Gemini API
export async function generateResponse(prompt: string, chatHistory: Array<{text: string, isUser: boolean}> = []) {
  try {
    // Get API key from environment variable
    const apiKey = "AIzaSyAFIoLz16YzAKku-YNQf8arDzvlndKzOfM";

    if (!apiKey) {
      console.error("Gemini API key is missing");
      throw new Error("API key not configured");
    }

    // Format the conversation history for Gemini API
    const messages = chatHistory.map(msg => ({
      role: msg.isUser ? "user" : "model",
      parts: [{ text: msg.text }]
    }));

    // Add the current prompt as the latest user message
    messages.push({
      role: "user",
      parts: [{ text: prompt }]
    });

    // Create the request payload
    const payload = {
      contents: messages,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 200,
        topP: 0.95,
        topK: 40
      }
    };

    // Construct the API URL
    const modelName = "gemini-pro";
    const url = `${API_BASE_URL}/models/${modelName}:generateContent?key=${apiKey}`;

    // Make the API request
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    // Check for successful response
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Gemini API error:", errorData);
      throw new Error(`API request failed with status ${response.status}`);
    }

    // Parse the response
    const data = await response.json();

    // Extract the text from the response
    if (data.candidates && data.candidates[0] && data.candidates[0].content &&
        data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
      return data.candidates[0].content.parts[0].text;
    } else {
      console.error("Unexpected response structure:", data);
      throw new Error("Invalid API response format");
    }
  } catch (error) {
    console.error("Error generating response:", error);
    return "Sorry, I'm having trouble connecting right now. Please try again later.";
  }
}
