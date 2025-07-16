# 🦸‍♂️ Wiki Fans - Marvel Characters

Uma aplicação web completa para explorar e descobrir personagens do universo Marvel, construída com React no frontend e GraphQL API no backend.

## 🚀 Visão Geral

O **Wiki Fans** é uma plataforma interativa que permite aos usuários explorar informações detalhadas sobre personagens do universo Marvel. A aplicação combina uma interface moderna e responsiva com uma API GraphQL robusta para fornecer uma experiência de usuário excepcional.

## 🏗️ Arquitetura do Projeto

O projeto está organizado em duas partes principais:

- **Frontend**: Aplicação React moderna com Vite
- **Backend**: API GraphQL com Apollo Server e Express

```
wiki_fans/
├── front_end/          # Aplicação React
│   ├── src/           # Código fonte
│   ├── public/        # Arquivos estáticos
│   └── package.json   # Dependências do frontend
└── back_end/          # API GraphQL
    ├── src/           # Código fonte da API
    ├── public/        # Arquivos estáticos (imagens)
    └── package.json   # Dependências do backend
```

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React 19** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool e dev server
- **ESLint** - Linting de código
- **CSS Modules** - Estilização modular

### Backend

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **Apollo Server** - Servidor GraphQL
- **GraphQL** - Query language para APIs

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Git

## 🚀 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd wiki_fans
```

### 2. Configuração do Backend

```bash
cd back_end
npm install
npm start
```

O servidor GraphQL estará disponível em `http://localhost:4000/graphql`

### 3. Configuração do Frontend

```bash
cd front_end
npm install
npm run dev
```

A aplicação React estará disponível em `http://localhost:5173`

## 🌐 Endpoints da API

### GraphQL Playground

- **URL**: `http://localhost:4000/graphql`
- **Descrição**: Interface interativa para testar queries e mutations

### Imagens dos Personagens

- **URL**: `http://localhost:4000/images`
- **Descrição**: Endpoint para acessar as imagens dos personagens

## 📊 Schema GraphQL

### Queries Disponíveis

#### `characters`

Retorna uma lista de todos os personagens disponíveis.

```graphql
query {
  characters {
    id
    name
    power
    image
  }
}
```

#### `character(id: ID!)`

Retorna um personagem específico pelo ID.

```graphql
query {
  character(id: "1") {
    id
    name
    power
    image
  }
}
```

### Tipo: `Character`

```graphql
type Character {
  id: ID!
  name: String!
  power: String!
  image: String!
}
```

## 🎨 Personagens Disponíveis

A API inclui informações sobre 20 personagens icônicos do universo Marvel:

- Iron Man
- Captain America
- Thor
- Hulk
- Black Widow
- Hawkeye
- Spider-Man
- Doctor Strange
- Black Panther
- Scarlet Witch
- Vision
- Ant-Man
- Wasp
- Falcon
- Winter Soldier
- Captain Marvel
- Star-Lord
- Gamora
- Rocket Raccoon
- Groot

## 🎯 Exemplos de Uso

### Buscar todos os personagens

```graphql
query GetAllCharacters {
  characters {
    id
    name
    power
    image
  }
}
```

### Buscar um personagem específico

```graphql
query GetIronMan {
  character(id: "1") {
    id
    name
    power
    image
  }
}
```

### Resposta de exemplo

```json
{
  "data": {
    "character": {
      "id": "1",
      "name": "Iron Man",
      "power": "Genius-level intellect, powered armor suit",
      "image": "/images/iron-man.jpg"
    }
  }
}
```

## 📁 Estrutura Detalhada do Projeto

### Frontend (`front_end/`)

```
front_end/
├── src/
│   ├── assets/        # Recursos estáticos
│   ├── App.jsx        # Componente principal
│   ├── main.jsx       # Ponto de entrada
│   ├── App.css        # Estilos do App
│   └── index.css      # Estilos globais
├── public/            # Arquivos públicos
├── package.json       # Dependências
├── vite.config.js     # Configuração do Vite
├── eslint.config.js   # Configuração do ESLint
└── index.html         # HTML base
```

### Backend (`back_end/`)

```
back_end/
├── src/
│   ├── graphql/       # Schema e resolvers GraphQL
│   ├── data/          # Dados dos personagens
│   │   └── characters.js
│   ├── public/        # Arquivos estáticos
│   │   └── images/    # Imagens dos personagens
│   └── index.js       # Arquivo principal do servidor
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## 🔧 Scripts Disponíveis

### Frontend

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Gera build de produção
npm run lint     # Executa o linter
npm run preview  # Visualiza o build de produção
```

### Backend

```bash
npm start        # Inicia o servidor de desenvolvimento
npm test         # Executa os testes (configuração básica)
```

## 🌍 Variáveis de Ambiente

### Backend

Crie um arquivo `.env` na pasta `back_end/`:

```env
PORT=4000
NODE_ENV=development
```

### Frontend

Crie um arquivo `.env` na pasta `front_end/`:

```env
VITE_API_URL=http://localhost:4000/graphql
```

## 🚀 Deploy

### Frontend

```bash
cd front_end
npm run build
```

### Backend

```bash
cd back_end
npm start
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

### Padrões de Código

- Use ESLint para manter a qualidade do código
- Siga as convenções de nomenclatura do projeto
- Adicione comentários quando necessário
- Teste suas mudanças antes de submeter

## 🐛 Solução de Problemas

### Problemas Comuns

1. **Porta já em uso**: Altere a porta no arquivo `.env`
2. **Dependências não encontradas**: Execute `npm install` novamente
3. **Erro de CORS**: Verifique se o backend está rodando na porta correta

### Logs de Debug

Para debug mais detalhado, adicione logs no console:

```javascript
console.log("Debug info:", data);
```

## 📝 Licença

Este projeto está sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autores

Desenvolvido como parte do projeto **Wiki Fans**.

## 🆘 Suporte

Se você encontrar algum problema ou tiver dúvidas:

1. Verifique a documentação
2. Procure por issues similares
3. Abra uma nova issue com detalhes do problema

## 🎉 Próximos Passos

- [ ] Implementar autenticação de usuários
- [ ] Adicionar mais personagens
- [ ] Criar sistema de favoritos
- [ ] Implementar busca avançada
- [ ] Adicionar testes automatizados
- [ ] Otimizar performance
- [ ] Implementar PWA

---

**🎉 Divirta-se explorando o universo Marvel através do Wiki Fans!**

_"With great power comes great responsibility" - Uncle Ben_
