---
title: "Como habilitar acesso à câmera em sites sem certificado HTTPS/SSL"
description: "Aprenda neste post como habilitar acesso à câmera em sites sem certificado HTTPS/SSL"
slug: como-habilitar-acesso-a-camera-em-sites-sem-certificado-https-ssl
author: Matheus Costa
categories: Tecnologia
image: /assets/images/posts/2024/06/como-habilitar-acesso-a-camera-em-sites-sem-certificado-https-ssl.webp
comments: true
---

Já tentou fazer o acesso à câmera do seu dispositivo pelo browser e a permissão de acesso a mesma não apareceu?

Isso provavelmente pode ser porque seu site não tem o certificado HTTPS/SSL, e o navegador bloqueia o acesso.

Mas existe uma configuração para ativar essa opção nos principais navegadores da web

Essa configuração é útil para sites locais (_localhost / 127.0.0.1_), em modo de desenvolvimento/testes.

Veja neste artigo como ativar.

### Ativando no Chrome (desktop/mobile)

<img src="/assets/images/posts/2024/06/insecure-origins.jpg" alt="Insecure origins">

1. Digite o link abaixo na barra de navegação do Chrome:

   - `chrome://flags/#unsafely-treat-insecure-origin-as-secure`

2. Ative a opção:

   - **"Insecure origins treated as secure"**

3. Insira as URLs que deseja

   - Por exemplo: `http://10.0.0.242:5173`

4. Reinicie navegador e pronto!

### No Safari

#### Desktop

1. Habilitar modo de desenvolvedor

2. Acessar na página:
   - `Desenvolvedor` > `Mostrar inspetor web` > Tocar no ícone: `Ajustes do Dispositivo` > Habilitar: `WebRTC - Permitir captura de mídia em sites pouco seguros`

<img src="/assets/images/posts/2024/06/como-habilitar-acesso-a-camera-em-sites-sem-certificado-https-ssl.jpg" alt="Safari">

#### Mobile

\*\* **_Opção só está disponível a partir do iOS 13_**

1. Com o site aberto, toque no ícone `“AA”` no canto superior esquerdo.

1. Em seguida, toque em:
   - `Ajustes do site` > `Câmera` > `Permitir`

<div style="display: flex; gap: 24px; margin-top: 24px">
  <img src="/assets/images/posts/2024/06/ios-1.jpg" alt="Safari">
  <img src="/assets/images/posts/2024/06/ios-2.jpg" alt="Safari">
<div>
