import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API health endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    owner: 'Md. Ahsanul Haque',
    service: 'ahsanuls-portfolio-api'
  });
});

// Contact endpoint scaffolding for future backend forwarding
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required fields.' });
  }
  
  // Log message internally (in static/production frontend this can integrate with SMTP or webhook)
  console.log(`[Contact Form Received] From: ${name} (${email}) | Subject: ${subject || 'No Subject'}`);
  
  return res.status(200).json({
    success: true,
    message: 'Thank you for reaching out. Your message has been received successfully.'
  });
});

// Serve static frontend build if dist folder exists
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) {
      res.status(200).send('API Server is active. Frontend is running via Vite dev/build.');
    }
  });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Portfolio server is running on port ${PORT}`);
  });
}

export default app;
