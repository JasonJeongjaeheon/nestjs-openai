import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';
import * as dotenv from 'dotenv';
dotenv.config();

const config = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_APIKEY,
});

const openai = new OpenAIApi(config);

@Injectable()
export class AppService {
  async getHello() {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt:
        '나는 인공지능 AI Chatbot이야. 질문을 하면 내가 답변을 해줄께. 만약 모른다면 "모름"이라고 할께.\n\nQ: 한국인의 기대 수명은 얼마야?\nA:',
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ['\n'],
    });
    return { result: response.data.choices[0].text };
  }
}
