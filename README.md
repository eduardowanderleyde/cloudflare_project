# Cloudflare Project

Este é um projeto React + TypeScript + Vite otimizado para deploy no Cloudflare Pages.

## Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Cloudflare Pages
- Cloudflare Workers

## Configuração Local

1. Instale as dependências:

```bash
npm install
```

2. Execute o projeto em desenvolvimento:

```bash
npm run dev
```

3. Para build de produção:

```bash
npm run build
```

## Deploy no Cloudflare Pages

1. Acesse o [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Vá para "Pages" > "Create a project"
3. Conecte seu repositório GitHub
4. Configure o build:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: 18 (ou superior)

## Otimizações do Cloudflare

Este projeto utiliza as seguintes otimizações:

- CDN global
- Cache inteligente
- Compressão automática
- SSL/TLS
- Proteção DDoS
- Workers para roteamento e cache

## Estrutura do Projeto

- `/src` - Código fonte
- `/public` - Arquivos estáticos
- `_worker.js` - Configuração do Cloudflare Worker
- `vite.config.ts` - Configuração do Vite

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
