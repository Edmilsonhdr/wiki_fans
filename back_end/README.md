# 🦸‍♂️ Marvel Characters GraphQL API

Uma API GraphQL moderna para consultar informações sobre personagens do universo Marvel, construída com Apollo Server e Express.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **Apollo Server** - Servidor GraphQL
- **GraphQL** - Query language para APIs

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## 🛠️ Instalação

1. **Clone o repositório**

   ```bash
   git clone <url-do-repositorio>
   cd back_end
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Execute o servidor**
   ```bash
   npm start
   ```

## 🌐 Endpoints

### GraphQL Playground

- **URL**: `http://localhost:4000/graphql`
- **Descrição**: Interface interativa para testar queries e mutations

### Imagens dos Personagens

- **URL**: `http://localhost:4000/images`
- **Descrição**: Endpoint para acessar as imagens dos personagens

## 📊 Schema GraphQL

### Query: `characters`

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

### Query: `character(id: ID!)`

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

## 📁 Estrutura do Projeto

```
back_end/
├── src/
│   ├── graphql/          # Schema e resolvers GraphQL
│   ├── data/             # Dados dos personagens
│   │   └── characters.js
│   ├── public/           # Arquivos estáticos
│   │   └── images/       # Imagens dos personagens
│   └── index.js          # Arquivo principal do servidor
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## 🎨 Personagens Disponíveis

A API inclui informações sobre 20 personagens do universo Marvel:

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

## 🔧 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm test` - Executa os testes (configuração básica)

## 🌍 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto para configurações específicas:

```env
PORT=4000
NODE_ENV=development
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido como parte do projeto Wiki Fans.

## 🆘 Suporte

Se você encontrar algum problema ou tiver dúvidas, abra uma issue no repositório.

---

**🎉 Divirta-se explorando o universo Marvel através desta API GraphQL!**
