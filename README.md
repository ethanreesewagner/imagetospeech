[imagetospeech.vercel.app](imagetospeech.vercel.app)

# Live Camera Captioning App

A web application that captures live camera footage, processes it through ViT-GPT2 image captioning model using transformers.js, and speaks the captions using the Web Speech API.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory:
```bash
HUGGING_FACE_ACCESS_TOKEN=your_actual_token_here
```

   You can get a Hugging Face access token from: https://huggingface.co/settings/tokens

3. Start the server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Features

- Live camera feed capture
- Real-time image captioning using ViT-GPT2 model
- Text-to-speech using Web Speech API
- Manual and automatic capture modes
- Configurable capture intervals

## Notes

- The app will work without an access token for public models, but a token is recommended for better rate limits and access to private models
- Make sure to allow camera permissions when prompted
- The model loads on first use, which may take a moment

