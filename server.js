import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname));
app.get('/api/token', (req, res) => {
    const token = process.env.HUGGING_FACE_ACCESS_TOKEN;
    if (!token || token === 'your_token_here') {
        return res.status(404).json({ error: 'Access token not configured. Please set HUGGING_FACE_ACCESS_TOKEN in .env file' });
    }
    res.json({ token });
});
app.get('/', (req, res) => {
    try {
        let html = readFileSync(join(__dirname, 'index.html'), 'utf8');
        const token = process.env.HUGGING_FACE_ACCESS_TOKEN;
        if (token && token !== 'your_token_here') {
            const tokenScript = `
        <script>
            window.HF_ACCESS_TOKEN = '${token}';
        </script>`;
            html = html.replace('</head>', tokenScript + '</head>');
        }
        res.send(html);
    } catch (error) {
        res.status(500).send('Error loading page: ' + error.message);
    }
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Make sure to set HUGGING_FACE_ACCESS_TOKEN in your .env file`);
});