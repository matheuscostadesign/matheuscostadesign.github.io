---
layout: post
title: "Como alterar a cor do texto selecionado de uma página com CSS"
author: matheus
categories: [Front-end]
image: assets/images/posts/como-alterar-cor-do-texto-selecionado-de-um-site.jpg
comments: true
---

Sabia que é possível alterar a cor padrão do texto selecionado pelo usuário no navegador?

Com essas duas linhas de CSS é possível alterar as cores e personalizá-las de acordo com a identidade visual do projeto/site/empresa.

## Alterando a cor do texto selecionado

```css
::-moz-selection {
  color: #ffffff;
  background-color: #bf4b8a;
}
::selection {
  color: #ffffff;
  background-color: #bf4b8a;
}
```

Gostou da dica? Sabia dela ou já usou em algum projeto? Tem alguma dica para acrescentar? Comenta aí o que achou. Valeeu!
