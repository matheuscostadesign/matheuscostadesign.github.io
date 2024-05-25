---
layout: post
title: "Como gerar o certificado SSL/HTTPS de forma manual"
description: "Veja neste artigo como gerar os arquivos de certificado SSL da Let's Encrypt para seu site de forma manual e gratuita."
slug: como-gerar-o-certificado-ssl-https-de-forma-manual
author: Matheus Costa
categories: Front-end, Deploy
image: assets/images/posts/2022/como-gerar-certificado-ssl-https-de-forma-manual.jpg
comments: true
---

Veja neste artigo como gerar os arquivos de certificado SSL da Let's Encrypt para seu site de forma manual e gratuita.

Este procedimento é necessário para hospedagens em servidores com versões antigas do Windows (Windows Server 2008, por exemplo) ou hospedagens que não suportam e/ou não tem integração com a Let's Encrypt para renovar o certificado automaticamente.

Então o procedimento será realizado manualmente, beleza?!

E de 3 em 3 meses será necessário refazer todo processo.

## Processo no servidor de hospedagem

1. Criar as pastas **".well-known"** e **"acme-challenge"** na raiz do site (e também nos subdomínios)

   - Ex: `dominio.com.br/.well-known/acme-challenge/...`
   - Ex: `subdominio.dominio.com.br/.well-known/acme-challenge/...`

2. Criar o arquivo **"web.config"** com a seguinte estrutura XML na pasta **"acme-challenge"** (e também nos subdomínios) - **PARA SERVIDOR WINDOWS**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <staticContent>
            <mimeMap fileExtension="." mimeType="text/plain" />
        </staticContent>
    </system.webServer>
</configuration>
```

## Geração do certificado e dos arquivos

1. Fazer a instalação do Certbot no Windows

   - **<a href="https://dl.eff.org/certbot-beta-installer-win32.exe" rel="noopener noreferrer">https://dl.eff.org/certbot-beta-installer-win32.exe</a>**

2. Abrir **Prompt de Comando** como administrador

3. Executar o comando:

   - <kbd>certbot certonly --manual</kbd>

4. Se for a primeira utilização, informe um email e aceite os termos de uso

5. Insira o nome do domínio _(Se for incluir os subdominios, fazer a separação por espaço ou vírgula)_

   - Ex 1: `subdominio.dominio.com.br www.dominio.com.br dominio.com.br`
   - Ex 2: `subdominio.dominio.com.br,www.dominio.com.br,dominio.com.br,`

6. Crie um arquivo com os dados que foram gerados pelo Certbot _(exatamente com o mesmo nome gerado pelo Certbot, sem nenhuma extenção)_

   - **Exemplo:**
   - **Nome do arquivo:** <kbd>LD_37mksvJMxkIU-wKmsglXG7h-EL15kfaddVS6XKa4</kbd>
   - **Conteúdo:** <kbd>LD_37mksvJMxkIU-wKmsglXG7h-EL15kfaddVS6XKa4.rt9TPxI7m6aoCBhS6YVbWpDqZSBD2vGrEyr88dPom_M</kbd>

7. Acessar o servidor de hospedagem e inserir o arquivo gerado na pasta **"acme-challenge"** (no domínio principal e nos subdominios)

   - Ex: **http://dominio.com.br/.well-known/acme-challenge/LD_37mksvJMxkIU-wKmsglXG7h-EL15kfaddVS6XKa4**
   - Ex: **http://subdominio.dominio.com.br/.well-known/acme-challenge/LD_37mksvJMxkIU-wKmsglXG7h-EL15kfaddVS6XKa4**

8. Abra a URL gerada pelo Certbot no navegador. A página deve carregar normalmente e exibir o conteúdo em forma de texto.

9. Volte no prompt de comando e pressione **"Enter"**

10. Pronto! O certificado será gerado na pasta:

- `C:\Certbot\live\dominio.com.br\fullchain.pem`
- `C:\Certbot\live\dominio.com.br\privkey.pem`

![ssl.png]({{ site.baseurl }}/assets/images/posts/2022/ssl.png)

## Enviando certificado para a empresa de hospedagem

1. Pegar os arquivos gerados pelo certbot e **alterar a extensão**

   - <kbd>fullchain.pem</kbd> para <kbd>fullchain.crt</kbd> e
   - <kbd>privkey.pem</kbd> para <kbd>privkey.key</kbd>

2. Criar uma pasta na raiz do do servidor

   - Ex: `Web > ssl`

3. Inserir os arquivos **"fullchain.crt"** e **"privkey.key"** na pasta criada via FTP

4. Abrir um chamado com a empresa de hospedagem (de 3 em 3 meses) e informá-los sobre a instalação do certificado tanto para o domínio principal quanto para subdomínios

5. Validar o funcionamento do certificado pelo site:

   - **<a href="https://certlogik.com/ssl-checker/" rel="noopener noreferrer">https://certlogik.com/ssl-checker/</a>**
   - **<a href="https://www.sslshopper.com/ssl-checker.html" rel="noopener noreferrer">https://www.sslshopper.com/ssl-checker.html</a>**

6. Forçar o uso do HTTPS via web.config/.htaccess (redirect)
