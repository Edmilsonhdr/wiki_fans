import fetch from 'node-fetch';
import { loadEnvFile } from 'node:process';

loadEnvFile();

const convertImageUrlToProxy = (imageUrl) => {
  if (!imageUrl) return imageUrl;
  return `http://localhost:${process.env.PORT || 4000}/api/image?url=${encodeURIComponent(imageUrl)}`;
};

export const userResolvers = {
  Query: {
    users: async () => {
      const res = await fetch(`https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}`);
      const data = await res.json();
      // Converter URLs de imagens para usar o proxy
      if (Array.isArray(data)) {
        return data.map(user => ({
          ...user,
          image: user.image ? { url: convertImageUrlToProxy(user.image.url) } : user.image
        }));
      }
      return data;
    },
    user: async (_parent, args) => {
      const res = await fetch(`https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}/${args.id}`);
      const data = await res.json();
      
      console.log('API Response:', JSON.stringify(data, null, 2)); // Debug
      
      // A API do Superhero pode retornar image.url, image como string, ou image.{sm,md,lg}
      // Converter URL da imagem para usar o proxy se existir
      let imageUrl = null;
      if (data && data.image) {
        if (typeof data.image === 'string') {
          imageUrl = data.image;
        } else if (data.image.url) {
          imageUrl = data.image.url;
        } else if (data.image.sm || data.image.md || data.image.lg) {
          imageUrl = data.image.lg || data.image.md || data.image.sm;
        }
      }
      
      if (imageUrl) {
        const proxiedUrl = convertImageUrlToProxy(imageUrl);
        console.log('Original URL:', imageUrl);
        console.log('Proxied URL:', proxiedUrl);
        return {
          ...data,
          image: { url: proxiedUrl }
        };
      }
      
      // Se não houver imagem, retornar o dado como está
      if (data && !data.image) {
        console.warn('Nenhuma imagem encontrada para o usuário');
      }
      
      return data;
    },
  },
};
