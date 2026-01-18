# Live Camera Captioning App

[imagetospeech.vercel.app](https://imagetospeech.vercel.app)

A web application that captures live camera footage, processes it through ViT-GPT2 image captioning model using transformers.js, and speaks the captions using the Web Speech API.

## Demo Video

[https://www.youtube.com/watch?v=ye-BIfGnGuw]
<iframe width="560" height="315" src="https://www.youtube.com/embed/ye-BIfGnGuw?si=eytoF656QvQdJhZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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

