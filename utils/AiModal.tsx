const { GoogleGenerativeAI,Harm } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOFLE_GEMINI_API_KEY);

// ...

// The Gemini 1.5 models are versatile and work with most use cases
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

// ...
const generationConfig = {
    temperature: 0.1,
    maxOutputTokens: 40960
  };
export const chatSession = model.startChat({
    generationConfig,
    history:[

    ],
});
