---
layout: post
title: "Guia básico de comandos terminal SSH/Bash/Putty"
description: "Aprenda neste post alguns dos comandos de terminal mais utilizados no dia a dia"
slug: guia-basico-de-comandos-terminal-ssh-bash-putty
author: Matheus Costa
categories: Tecnologia
image: assets/images/posts/2023/05/guia-basico-de-comandos-terminal-ssh-bash-putty.jpg
comments: true
---

Aprenda neste post alguns dos comandos de terminal mais utilizados no dia a dia

## Comandos básicos para terminal

- Localizar pasta:`cd nome_da_pasta`
- Voltar pasta/diretório: `cd ..`
- Listar conteúdo do diretório: `ls`
- Descompactar ZIP:`unzip nome_do_arquivo.zip`
- Apagar pasta inteira: `rm -rf nome_da_pasta`
- Apagar arquivo específico: `rm nome_do_arquivo1.txt`
- Apagar todos arquivos, menos a pasta: `rm -rf *`
- Limpar comandos: `clear`

## Backup via SSH

- Acessar a raiz da pasta com o `PuTTY`
- Executar o comando:
  `tar -czvf site.tar.gz public_html && mv site.tar.gz public_html && ls -lha public_html`
- O arquivo `site.tar.gz` será criado na raiz do site
- Basta acessar o domínio e fazer o download.
  - Exemplo: `https://safebras.com.br/site.tar.gz`
- Comando para excluir o arquivo: `rm -f public_html/site.tar.gz`
