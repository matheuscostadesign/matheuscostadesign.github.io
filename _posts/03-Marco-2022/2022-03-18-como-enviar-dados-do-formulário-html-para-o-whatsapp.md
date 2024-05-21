---
layout: post
title: "Como enviar dados do formulário HTML para o Whatsapp"
author: matheus
categories: [Front-end]
image: assets/images/posts/como-enviar-dados-do-formulário-html-para-o-whatsapp.jpg
comments: true
---

Veja neste artigo como enviar os dados digitados no formulário HTML para o Whatsapp com validação de campos obrigatórios.

## Exemplo/Demonstração da funcionalidade:

- <a href="https://matheuscostadesign.github.io/enviar-para-whatsapp/" target="_blank" rel="noopener noreferrer">matheuscostadesign.github.io/enviar-para-whatsapp/</a>

## Código fonte completo:

- <a href="https://github.com/matheuscostadesign/enviar-para-whatsapp" target="_blank" rel="noopener noreferrer">github.com/matheuscostadesign/enviar-para-whatsapp</a>

<br>

### HTML: Sem redirecionamento

```html
<form action="#" method="get" onsubmit="abrirWhatsapp()">
  <input type="text" name="nome" id="nome" placeholder="Nome" required /><br />
  <input type="tel" name="telefone" id="telefone" placeholder="Telefone" required /><br />
  <input type="email" name="email" id="email" placeholder="E-mail" required /><br />
  <textarea name="msg" id="msg" placeholder="Mensagem" rows="5" required></textarea><br />
  <button type="submit">Enviar dados p/ Whatsapp</button>
</form>
```

### HTML: Com redirecionamento

```html
<form action="obrigado.html" method="get" onsubmit="abrirWhatsapp()">
  <input type="text" name="nome" id="nome" placeholder="Nome" required /><br />
  <input type="tel" name="telefone" id="telefone" placeholder="Telefone" required /><br />
  <input type="email" name="email" id="email" placeholder="E-mail" required /><br />
  <textarea name="msg" id="msg" placeholder="Mensagem" rows="5" required></textarea><br />
  <button type="submit">Enviar dados p/ Whatsapp</button>
</form>
```

### Javascript

```js
<script>
    function abrirWhatsapp() {
      var nome = document.getElementById("nome").value;
      var telefone = document.getElementById("telefone").value;
      var email = document.getElementById("email").value;
      var msg = document.getElementById("msg").value;
      var url = "https://wa.me/5517992143072?text=" // Seu numero
        + "*Formulário de Contato*" + "%0a" // Mensagem personalizada
        + "%0a" // Quebra de linha
        + "*Nome*: " + nome + "%0a" // Dados do formulário
        + "*Telefone*: " + telefone + "%0a"
        + "*E-mail*: " + email + "%0a"
        + "*Mensagem*: " + msg;
      window.open(url, '_blank').focus();
    }
</script>
```

Gostou da dica? Sabia dela ou já usou em algum projeto? Tem alguma dica para acrescentar? Comenta aí o que achou. Valeeu!
