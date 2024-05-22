---
layout: post
title: "Disponibilize imagens em formatos de última geração"
description: "Veja neste artigo como resolver o problema no resultado do Google Pagespeed: Disponibilize imagens em formatos de última geração"
slug: como-resolver-o-erro-disponibilize-imagens-em-formatos-de-ultima-geracao
author: Matheus Costa
categories: Front-end
image: assets/images/posts/converter-imagem-webp.jpg
comments: true
---

Veja neste artigo como resolver o problema no resultado do Google Pagespeed: _"Disponibilize imagens em formatos de última geração"_

### Convertendo imagens para WEBP com Photoshop

- Baixar o plugin: WebPShop.8bi
  - [Documentação WEBP do Google][link1]
  - [Baixar projeto no Github][link2]
- Inserir o arquivo `WebPShop.8bi` no pasta Plugins do Photoshop
  - Ex: `Photoshop18\App\Ps\Plug-ins`
- Para exportar a imagem como WEBP basta clicar em `Save As` e selecionar o tipo: `WEBP`

[link1]: https://developers.google.com/speed/webp/docs/webpshop#windows_installation_steps
[link2]: https://github.com/webmproject/WebPShop/releases

### Usando imagens WEBP no HTML

```html
<picture>
  <source type="image/webp" srcset="flower.webp" />
  <source type="image/jpeg" srcset="flower.jpg" />
  <img src="flower.jpg" alt="" />
</picture>
```

### WebP em imagens no background CSS

```css
background: url("../assets/images/bg-info.jpg");
background: -webkit-image-set(url("../assets/images/bg-info.webp") 1x) no-repeat;
```

### Referencias

- [Ole Michelsen](https://ole.michelsen.dk/blog/using-webp-images-html-css/)
