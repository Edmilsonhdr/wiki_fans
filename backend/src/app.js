import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { ruruHTML } from 'ruru/server';
import { schema } from '../graphql/schema.js'
import cors from 'cors';
import fetch from 'node-fetch';

export const app = express();

app.use(cors());

// Proxy para imagens (evita bloqueio CORS)
app.get('/api/image', async (req, res) => {
  const imageUrl = req.query.url;
  console.log('Proxy recebeu requisição para:', imageUrl);
  if (!imageUrl) {
    return res.status(400).json({ error: 'URL da imagem é obrigatória' });
  }

  try {
    // Adicionar headers de navegador para evitar bloqueio
    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.superherodb.com/',
      }
    });
    
    if (!response.ok) {
      console.error(`Erro HTTP ${response.status} ao buscar imagem:`, imageUrl);
      console.error('Response headers:', Object.fromEntries(response.headers));
      return res.status(response.status).json({ error: `Erro ao buscar imagem: ${response.status}` });
    }
    
    const contentType = response.headers.get('content-type');
    // node-fetch v3 retorna buffer diretamente
    const buffer = await response.buffer();
    
    res.setHeader('Content-Type', contentType || 'image/jpeg');
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(buffer);
  } catch (error) {
    console.error('Erro ao buscar imagem:', error);
    console.error('Stack:', error.stack);
    res.status(500).json({ error: `Erro ao carregar imagem: ${error.message}` });
  }
});
// Endpoint principal do GraphQL
app.all('/graphql', createHandler({ schema }));

// Playground
app.get('/', (_req, res) => {
  res.type('html');
  res.end(ruruHTML({ endpoint: '/graphql' }));
});

