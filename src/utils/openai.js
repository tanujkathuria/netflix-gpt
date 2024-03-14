import OpenAI from "openai";

console.log("api key", process.env.REACT_APP_OPEN_API_KEY);
const openai = new OpenAI({
  apiKey: `${process.env.REACT_APP_OPEN_API_KEY}`,
  dangerouslyAllowBrowser: true,
});

export default openai;
