import axios from 'axios';

const GPT3_API_KEY = process.env.GPT3_API_KEY;
const GPT3_API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${GPT3_API_KEY}`
};

const gpt3 = {
  chatWithBot: async (message) => {
    const data = {
      'prompt': message,
      'max_tokens': 60
    };

    try {
      const response = await axios.post(GPT3_API_URL, data, { headers });
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error('Error in GPT-3 API call', error);
      return '';
    }
  }
};

export default gpt3;