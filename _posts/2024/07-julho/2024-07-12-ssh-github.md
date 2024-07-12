---
layout: post
title: "Como configurar chave SSH para o Github"
description: "Aprenda neste post como configurar chave SSH para o Github"
slug: como-configurar-chave-ssh-github
author: Matheus Costa
categories: Tecnologia
image: assets/images/posts/2024/07/como-configurar-chave-ssh-github.jpg
comments: true
---

Aprenda neste post como configurar chave SSH para o Github

### 1) Gerando chave SSH

- Executar no terminal
  - `ssh-keygen -t ed25519 -C "your_email@example.com"`
- Colocar o e-mail do Github em “your_email…”
- Pressionar **“Enter”** p/ gerar a chave no diretório padrão
- Após isso, irá solicitar uma senha.
- Insira e repita a senha, por exemplo:
  - `123456`
- Se der certo, **2 chaves serão criadas** _(pública e privada)_
- Acesse o diretório do arquivo público
- No terminal irá mostrar onde o arquivo foi gerado, por exemplo:
  - `Your public key has been saved in /Users/users/.ssh/id_ed25519.pub`
- Agora, acesse essa pasta e abra o arquivo `“id_ed25519.pub”` em um editor de texto (VSCode, por exemplo)
- O arquivo deve conter o seguinte:
  - `ssh-ed25519 BBBBD4OabD2mZK26PU5BBBbqT7SzVqptcJOdFw2gXMGQ2ZeyGAfhZHcb2Qo9wmdZ your_email@example.com`
- Copie esse conteúdo do arquivo.

### 2) Configuração no Github

- O próximo passo é [**abrir a página de configurações do Github**](https://github.com/settings/profile)
- No menu lateral, clique em:
  - **SSH and GPG keys**
  - Clique no botão: **New SSH key**
  - Informe um título p/ esta chave `(Ex: MacOS)`
  - Cole o conteúdo do arquivo `“id_ed25519.pub”` no campo “Key” e salve as configurações
- O próximo passo é fazer o clone do projeto
- Vá até o repositório no Github e copie a URL de clone via SSH
- Exemplo: `git@github.com:repo/app.git`
  - Baixe o [Fork](https://git-fork.com/)
  - Navegue até: `Fork > File > Clone`
  - Insira a URL SSH, faça o login na conta e pronto!

[Documentação completa](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
