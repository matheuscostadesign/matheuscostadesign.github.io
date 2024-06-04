---
layout: post
title: "Comandos básicos de Git"
description: "Aprenda neste post alguns dos comandos básicos de Git"
slug: comandos-basicos-de-git
author: Matheus Costa
categories: Git
image: assets/images/posts/2023/05/comandos-basicos-de-git.jpg
comments: true
---

Inicializar repositório Git

```jsx
git init
```

Criar arquivo .gitignore

```jsx
npx gitignore node
```

Ver os arquivos que serão adicionados

```jsx
git status
```

Adicionar todas mudanças (stage)

```jsx
git add .
```

Comitar e escrever o que foi feito

```jsx
git commit -m "feat: primeiro commit"
```

Garantir que está na branch “main”

```jsx
git branch -M main
```

Linkar a pasta local com a pasta remota do repositório no Github

```jsx
git remote add origin https://github.com/matheuscostadesign/aluratube.git
```

Mandar os arquivos pra pasta remota (Push to Remote)

```jsx
git push -u origin main
```
