---
title: "Como fazer todos os links externos do site abrir em uma nova aba/guia"
description: "Veja neste artigo como fazer com que todos os links externos do seu site abram em uma nova guia do navegador."
slug: como-abrir-todos-links-externos-do-site-em-uma-nova-aba-ou-guia
author: Matheus Costa
categories: Front-end
image: /assets/images/posts/2024/05/como-abrir-todos-links-externos-do-site-em-uma-nova-aba-ou-guia.webp
comments: true
---

Aprenda como fazer com que todos os links externos do seu site abram em uma nova guia do navegador automaticamente, sem precisar ficar adicionando `target="_blank"` manualmente para cada tag `a` (âncora) no HTML.

## Adicionando script

Para fazer com que todos os links externos (aqueles que não apontam para o seu domínio) abram em uma nova guia, você pode usar JavaScript para adicionar o atributo `target="_blank"` a esses links. Aqui está um exemplo de como fazer isso:

1. **Obter todos os links da página**: Você pode selecionar todos os elementos `<a>`.
2. **Verificar se o link é externo**: Comparar o domínio do link com o domínio da sua página.
3. **Adicionar `target="_blank"` aos links externos**: Se o link for externo, adicionar o atributo para que ele abra em uma nova guia.

Aqui está um código JavaScript que realiza essas etapas:

```javascript
document.addEventListener("DOMContentLoaded", function () {
  // Obter o domínio atual
  const currentDomain = window.location.hostname;

  // Selecionar todos os links na página
  const links = document.querySelectorAll("a");

  // Iterar sobre cada link
  links.forEach((link) => {
    // Obter o href do link
    const href = link.getAttribute("href");

    // Verificar se o href é um link externo
    if (href && !href.includes(currentDomain) && href.startsWith("http")) {
      // Adicionar o atributo target="_blank"
      link.setAttribute("target", "_blank");
      // Evita que a página de destino acesse a página de origem
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});
```

### Explicação do código:

1. **Evento DOMContentLoaded**: O código é executado quando o DOM é carregado e pronto. Isso garante que todos os links estejam presentes na página antes de tentar manipulá-los.

2. **Obter o domínio atual**: `window.location.hostname` retorna o domínio do site atual, sem incluir o protocolo (http/https) e o caminho.

3. **Selecionar todos os links**: `document.querySelectorAll("a")` seleciona todos os elementos `<a>` na página.

4. **Iterar sobre os links**: `forEach` é usado para iterar sobre cada link selecionado.

5. **Verificar se o link é externo**:

   - `href && !href.includes(currentDomain) && href.startsWith("http")`: Isso verifica se o link tem um atributo `href`, se o `href` não contém o domínio atual e se o `href` começa com "http" (para garantir que é um link completo).

6. **Adicionar `target="_blank"`**: Se o link for externo, `link.setAttribute("target", "_blank")` adiciona o atributo `target` com valor `_blank`, fazendo com que o link abra em uma nova guia.

7. **Adicionar `rel="noopener noreferrer"`**: O atributo `“rel=noopener noreferrer”` é usado para abrir links externos em uma nova janela e evitar que a página de destino acesse a página de origem.

### Como usar:

1. Adicione o código JavaScript acima ao seu arquivo JavaScript principal ou diretamente dentro de uma tag `<script>` no final do seu arquivo HTML, antes da tag de fechamento `</body>`.

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <title>Exemplo</title>
  </head>
  <body>
    <!-- Seu conteúdo aqui -->
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        const currentDomain = window.location.hostname;
        const links = document.querySelectorAll("a");
        links.forEach((link) => {
          const href = link.getAttribute("href");
          if (
            href &&
            !href.includes(currentDomain) &&
            href.startsWith("http")
          ) {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
          }
        });
      });
    </script>
  </body>
</html>
```

Dessa forma, todos os links externos na sua página abrirão em uma nova guia automaticamente.

Comente aqui em baixo se esta dica te ajudou 👊
