# Matheus Costa - Portfolio & Blog

Portfolio pessoal e blog desenvolvido com Astro e React.

## 🚀 Tecnologias

- **Astro** - Framework web moderno para sites rápidos
- **React** - Componentes interativos
- **TypeScript** - Tipagem estática
- **Swiper** - Carrosséis de projetos
- **TSParticles** - Efeitos de partículas no hero

## 📦 Estrutura do Projeto

```
/
├── public/              # Assets estáticos
│   ├── assets/         # Imagens, ícones, etc.
│   ├── cv.pdf
│   └── ads.txt
├── src/
│   ├── components/     # Componentes React
│   ├── content/        # Content Collections (blog posts)
│   ├── data/           # Dados dos projetos (JSON)
│   ├── layouts/        # Layouts Astro
│   ├── pages/          # Páginas (roteamento baseado em arquivos)
│   └── styles/         # Estilos globais
└── package.json
```

## 🧞 Comandos

Todos os comandos são executados na raiz do projeto:

| Comando             | Ação                                                          |
| :------------------ | :------------------------------------------------------------ |
| `npm install`       | Instala as dependências                                       |
| `npm run dev`       | Inicia o servidor de desenvolvimento em `localhost:4321`      |
| `npm run build`     | Cria a build de produção em `./dist/`                         |
| `npm run preview`   | Preview da build localmente antes de fazer deploy             |
| `npm run astro ...` | Executa comandos CLI do Astro como `astro add`, `astro check` |

## 📝 Adicionando Posts no Blog

1. Crie um novo arquivo `.md` em `src/content/blog/`
2. Adicione o frontmatter:

```yaml
---
title: "Título do Post"
description: "Descrição breve do post"
author: Matheus Costa
categories: Categoria
image: /assets/images/posts/ano/mes/imagem.jpg
comments: true
---
```

3. Escreva o conteúdo em Markdown
4. O post aparecerá automaticamente no blog

## 🚀 Deploy

O site é automaticamente deployado no GitHub Pages quando você faz push para a branch `main`.

### Configuração do GitHub Pages

1. Vá em Settings > Pages
2. Em "Build and deployment", selecione "GitHub Actions"
3. O workflow `.github/workflows/deploy.yml` cuidará do resto

## 📄 Licença

© 2026 Matheus Costa. Todos os direitos reservados.
