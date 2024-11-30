import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
  

  const apiKey =import.meta.env.VITE_API_KEY;

  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "tell me something about apple"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Apple Inc. is a multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.  They're best known for their iconic products like the iPhone, iPad, Mac computers, and Apple Watch, and for their strong emphasis on user experience and design.  The company has a significant global impact, influencing trends in technology, marketing, and retail.\n"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    return result.response.text()
  }
  
  export default run;
