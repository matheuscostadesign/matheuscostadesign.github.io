---
layout: post
title: "Como alterar menu header após scroll com Javascript"
description: "Veja neste artigo como alterar o menu/cabeçalho/header do site após scroll na página com Vanilla Javascript (Pure JS)."
slug: como-alterar-menu-header-apos-scroll-com-javascript
author: Matheus Costa
categories: Front-end
image: assets/images/posts/como-alterar-menu-header-apos-scroll.jpg
comments: true
---

Veja neste artigo como alterar o menu/cabeçalho/header do site após scroll na página com Vanilla Javascript (Pure JS), sem utilizar o framework jQuery.

## Configurando o HTML

- Primeiramente vamos chamar em nosso HTML o arquivo Javascript que irá conter a função para alterar o header.
- Neste exemplo, o arquivo de scripts está na pasta `js/scripts`
- Insira o comando abaixo antes do fechamento da tag `</body>`

```html
<script src="js/scripts.js"></script>
```

## Adicionando função no Javascript

- Agora insira o comando abaixo no arquivo de scripts
- Lembrando que é necessário alterar o seletor: `querySelector(".header")` para que ele capture o seu elemento HTML, seja uma classe ou um ID.
- Exemplo: `document.querySelector("NOME-DA-SUA-CLASSE-OU-ID")`

```js
// Função Alterar Header Apos Scroll
function alterarHeaderAposScroll() {
  const header = document.querySelector(".header"); // captura o header
  const navHeight = header.offsetHeight;
  if (window.scrollY >= navHeight) {
    // se o scroll for maior que a altura do header adiciona a classe ativo
    header.classList.add("ativo");
  } else {
    header.classList.remove("ativo"); // remove a classe
  }
}

// Chamada das funções pelo scroll
window.addEventListener("scroll", function () {
  alterarHeaderAposScroll();
});
```

## Personalizando a classe no CSS

- Agora é só adicionar a classe `.ativo` no arquivo .CSS do seu menu e fazer as personalizações desejadas.
- Toda vez que o scroll na página for maior que a altura do header a classe será adicionada

```scss
.header {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 12.5rem;
  background: transparent;
  display: flex;
  align-items: center;
  transition: all 0.3s;
}

// Habilita classe .ativo após o scroll
.header.ativo {
  background: $white;
  height: 8rem;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
}
```

- No exemplo acima, eu adiciono uma cor de fundo (branco), diminuo a altura do cabeçalho e adiciono também uma sombra.
- Todas essas mudança só são aplicadas após o scroll na página.
- E se voltar ao topo, a classe é removida e os estilos também.

## Inspecionando elemento

- Para validar o funcionamento da função, inspecione a página (F12) e verifique se seu menu está recebendo a classe `.ativo` quando o scroll é feito na página.

Gostou da dica? Sabia dela ou já usou em algum projeto? Tem alguma dica para acrescentar? Comenta aí o que achou. Valeeu!
