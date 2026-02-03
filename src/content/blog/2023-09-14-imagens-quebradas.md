---
title: "Como detectar imagens quebradas"
description: "Aprenda como detectar e corrigir imagens quebradas de um site"
slug: como-detectar-imagens-quebradas
author: Matheus Costa
categories: Git
image: /assets/images/posts/2023/09/como-detectar-imagens-quebradas.jpg
comments: true
---

## O problema

Lidamos com muitas imagens em projetos web e muitas vezes esquecemos de tratar quando a foto está com algum problema de referência, link quebrado ou até uma imagem que depende da gestão do usuário (onde o mesmo não adicionou ou excluiu a mesma).

## Exemplo de imagem quebrada

Exemplo de como uma imagem é exibida no navegador sem tratamento de erros:

![Erro ao carregar o logo](/assets/images/posts/2023/09/exemplo-erro.jpg)

Erro ao carregar o logo

## Soluções

### 1) Tag `<img>` no HTML

- A solução mais simples é se a imagem estiver sendo renderizada em uma tag `<img>`

- Basta adicionar a propriedade `onerror` abaixo e o caminho da imagem que será renderizada caso a principal esteja com problema

```html
<img
  src="logo.png"
  onerror="this.onerror=null;this.src='https://placehold.co/200x100';"
/>
```

### 2) Background-image no CSS

Se a imagem estiver sendo renderizada via CSS com a propriedade `background-image` também podemos adicionar uma foto alternativa para substituir a que está quebrada:

```html
<div class="bg">Imagem como background</div>
```

#### CSS

```css
.bg {
  width: 200px;
  height: 100px;
  background-image: url("image-broken.png"), url("https://placehold.co/200x100");
  background-size: cover;
  background-repeat: no-repeat;
}
```

### 3) Imagem no React

Exemplo de como adicionar a imagem de fallback para um componente `<img>` no React:

```jsx
<img
  src="/assets/logo.png"
  alt="Logo do cliente"
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = "/assets/logo-fallback.png";
  }}
/>
```

### 4) Componente React com background

Exemplo de background image para um componente MUI Box (React JSX):

```js
import React from "react";

export default function Image() {
  return (
    <Box
      width={200}
      height={100}
      sx={{
        background: `url("/assets/image-broken.png"), url("/assets/img-fallback.svg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
```

## Conclusão

- É isso aí, espero ter ajudado a evitar imagens quebradas em seus projetos web!
