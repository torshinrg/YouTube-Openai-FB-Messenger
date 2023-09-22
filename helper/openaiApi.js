require('dotenv').config();


const OpenAI = require("openai")

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});


const chatCompletion = async (prompt) => {

    try {
        const response = await openai.chat.completions.create(
            {
                model: "gpt-3.5-turbo",
                messages: [
                    { "role": "system", "content": "You are a helpful assistant." },
                    { "role": "user", "content": prompt }
                ],
                max_tokens: 30,
            }
        );

        let content = response.data.choices[0].message.content;

        return {
            status: 1,
            response: content
        };
    } catch (error) {
        return {
            status: 0,
            response: ''
        };
    }
};

module.exports = {
  chatCompletion
};
