---
layout: post
title: "Como fazer o efeito voltar ao topo suave com jQuery"
description: "Veja neste artigo como fazer o efeito voltar ao topo da página de forma suave (smooth scrolling) utilizando a biblioteca jQuery"
slug: como-fazer-o-efeito-de-voltar-ao-topo-suave-com-jquery
author: Matheus Costa
categories: Front-end
image: assets/images/posts/botao-voltar-ao-topo-suave-jquery.jpg
comments: true
---

Veja neste artigo como fazer o efeito voltar ao topo da página de forma suave (smooth scrolling) utilizando a biblioteca jQuery, que irá funcionar perfeitamente nos browsers para Windows (Chrome, Brave, Firefox, Edge, etc) quanto para o browser da Apple/iOS/Macbook (Safari).

## 1. Inserindo o jQuery no HTML

- Primeiramente faça o download da biblioteca jQuery (ou utilize via CDN):

- <a href="https://jquery.com/download/" target="_blank" rel="noopener noreferrer">https://jquery.com/download/</a>

- Referencie a biblioteca jQuery em seu HTML, antes do fechamento da tag `</body>`

```html
<script src="js/jquery-3.6.0.min.js"></script>
```

## 2. Criando o elemento/botão que irá fazer o efeito de voltar ao topo

- No exemplo abaixo, vamos criar um simples link, com um ícone em SVG:

```html
<a href="#" title="Voltar ao topo" class="voltar-topo">
  <img src="assets/icone-top.svg" alt="Voltar ao topo" />
</a>
```

### 3. Scroll suave ativado pelo botão

- Agora basta adicionar o código abaixo no seu arquivo de scripts e pronto!
- Lembrando que o comando `$(".voltar-topo")` faz referencia ao elemento HTML
- Portanto, se seu botão está com outro nome, ou um ID, por exemplo, é só alterar essa opção

```js
// Voltar ao topo suave (jQuery)
$(document).ready(function () {
  $(".voltar-topo").click(function () {
    // elemento/botao
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});
```

### 4. Scroll suave no menu (Header)

- Caso queira que os links do seu menu também levem a sessão de sua página de forma suave, adicione o código abaixo em seu arquivo de scripts e faça as mudanças necessárias nas linhas onde o código está comentado

```js
// Scroll suave nos links do Header
$('.header a[href^="#"]').on("click", function (e) {
  // seu menu
  e.preventDefault();
  var id = $(this).attr("href"),
    targetOffset = $(id).offset().top;
  $("html, body").animate(
    {
      scrollTop: targetOffset - 80, // margin-top (altura do header)
    },
    400 // velocidade transição
  );
});
```

- Lembrando que é necessário seu menu/header chame esta sessão. Por exemplo:

```html
<header class="header">
  <div class="container">
    <nav>
      <ul>
        <li><a href="#contato" class="link under">Contato</a></li>
      </ul>
    </nav>
  </div>
</header>
```

- E a sessão deve ter o mesmo ID:

```html
<section class="s-contato" id="contato"></section>
```

Dessa forma, quando o usuário clicar no link a página irá descer suavemente até a sessão desejada.

Gostou da dica? Sabia dela ou já usou em algum projeto? Tem alguma dica para acrescentar? Comenta aí o que achou. Valeeu!
