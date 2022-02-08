### Otimização de imagem (Lazy Load)

```html
<img src="imagem.png" alt="Texto alternativo" loading="lazy" />
```

### Forçar execução dos scripts somente após leitura de todo código HTML

```js
<script src="scripts.js" defer></script>
```

### Dark Mode
```css
body {
  color: #333;
  background: #fff;
}

@media screen and (prefers-color-scheme: dark) {
  body {
    background: #2d3239;
    color: #75715e;
  }

  h1 {
    color: #e9d970;
  }
}
```

### Alterando a cor do texto selecionado
```css
::-moz-selection {
  color: #FFFFFF;
  background-color: #BF4B8A;
}
::selection {
  color: #FFFFFF;
  background-color: #BF4B8A;
}
```

### Personalizando barra de rolagem
```css
body::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}

body::-webkit-scrollbar {
  width: 5px;
  background-color: var(--black);
}

body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: var(--color-primary);
}
```

### Campo de preenchimento obrigatório em HTML

```html
<input type="email" required>
```

### Tamanho máximo de caracteres em HTML
```html
<input type="text" maxlength="40">
```

### Tamanho mínimo de caracteres em HTML
```html
<input type="text" minlength="5">
```

### Expressão regular em HTML (Regex)
```html
<input type="text" size="1" maxlength="1" pattern="A|E|I|O|U|a|e|i|o|u" required>
```

### Estilizar validações dos inputs/campos obrigatórios
```css
input:invalid {
  border: 2px dashed red;
}
input:valid {
  border: 2px solid green;
}
```

### Personalizar grid Bootstrap

```css
/* Grid Container Bootstrap */
@media (min-width: 1280px) {
  .container,
  .container-sm,
  .container-md,
  .container-lg,
  .container-xl {
    max-width: 1220px !important;
  }
}
```

### Mudar a cor do marcador de um item da lista

```css
::marker {
  color: pink;
}
```



### Configurações CSS personalizadas para impressao (Ctrl + P)
```css
@page {
  -webkit-print-color-adjust: exact;
  size: A4;
  margin: 0
}
@media print {
  border: none;
  box-shadow: initial;
  page-break-after: always
}
```

### Circulo
```css
.circulo {
  clip-path: circle();
}
```

### Adicionar icone/imagem no item da lista
```css
ul li {
  list-style-image: url(../assets/images/icon-check.svg);
 }
```

### Breakpoints

```´txt
1. Resolution - 1920x1000
2. Resolution - 1440x900
3. Resolution - 1366x768
4. Resolution - 1280x650
5. Resolution - 1150x700
6. Resolution - 1024x1000
7. Resolution - 810x700
8. Resolution - 600x700
9. Resolution - 480x850
```

### Redirecionamento personalizado IIS (web.config)

```xml
<httpErrors errorMode="Custom" existingResponse="Replace">
<clear />
<error statusCode="404" path="http://www.bing.com" responseMode="Redirect"/>
</httpErrors>
```

### VSCode Online
```txt
https://vscode.dev/
(.) no repositorio
```

### Lottie
```html
<iframe src="https://embed.lottiefiles.com/animation/54425"></iframe>
```

### Instafeed.js
- https://instafeedjs.com/
- https://github.com/stevenschobert/instafeed.js
- https://www.youtube.com/watch?v=ES84srKq-jo (Como gerar o token direto no FB)
- Em 60 dias o token expira***
```js
var feed = new Instafeed({
  accessToken: "accessToken: "YOUR_TOKEN",",
  limit: 4,
  template: '<div class="img-insta"><a href="{{link}}" target="_blank" rel="noopener noreferrer"><img title="{{caption}}" src="{{image}}"/></a></div>',
});
feed.run();
```

### Instafeed.js (via Instant Token)
- https://www.instant-tokens.com/ 
- Adicionar na URL o caminho do JSON (JSON Response)
- A ferramenta faz a atualização do token automaticamente (Teste dia 12/01/2022)
```js
fetch("https://ig.instant-tokens.com/users/8a1e4632-5d4f-41fb-8743-85765acf0fd5/instagram/17841451041903700/token?userSecret=sxreus18hblqmqwpi8djjj")
  .then((e) => e.json())
  .then((e) => {
    var t = new Instafeed({
      accessToken: e.Token,
      limit: 4,
      template: '<div class="img-insta"><a href="{{link}}" target="_blank" rel="noopener noreferrer"><img title="{{caption}}" src="{{image}}"/></a></div>',
    });
    t.run();
  });
```

### Convertendo imagens para WEBP com Photoshop
- Baixar o plugin: WebPShop.8bi
  - https://developers.google.com/speed/webp/docs/webpshop#windows_installation_steps
  - https://github.com/webmproject/WebPShop/releases 
- Inserir o arquivo `WebPShop.8bi` no pasta Plugins do Photoshop
  -  Ex: `Photoshop18\App\Ps\Plug-ins` 
- Para exportar a imagem como WEBP basta clicar em Save As e selecionar o tipo: `WEBP`

### Usando imagens WEBP no HTML
- https://ole.michelsen.dk/blog/using-webp-images-html-css/

```html
<picture>
  <source type="image/webp" srcset="flower.webp">
  <source type="image/jpeg" srcset="flower.jpg">
  <img src="flower.jpg" alt="">
</picture>
```

### WebP em imagens no background CSS
```css
  background: url("../assets/images/bg-info.jpg");
  background: -webkit-image-set(url("../assets/images/bg-info.webp") 1x) no-repeat;
```

### Atualizar ano atual automaticamente com Javascript
```html
<p><span id="ano">2021</span> - Todos os direitos reservados</p>
```

### Ferramentas WEB
- https://webcode.tools/

```js
const ano = document.getElementById("ano");
const anoAtual = new Date();
ano.innerHTML = anoAtual.getFullYear();
```

### Otimização imagens JPEG
- https://jpeg.rocks/

### Transformar site em PWA
- https://christianheilmann.com/2022/01/13/turning-a-github-page-into-a-progressive-web-app/
- https://github.com/codepo8/github-page-pwa

### Como executar projetos C# em localhost:127.0.0.1

#### Visual Studio
- Baixar e instalar dotnet-sdk-2.2.207-win-x64
- Baixar e instalar dotnet-hosting-2.2.8-win.exe
- Abrir a solucao e executar pelo IIS Server

#### Visual Studio Code
- Instalar a extensão C#
- Abrir o projeto individualmente
- Executar o projeto pelo terminal: `dotnet run`
- Limpar projeto: `dotnet clean`

### Atalhos VSCode

- <kbd>ctrl</kbd> + <kbd>;</kbd> = Comentar código
- <kbd>ctrl</kbd> + <kbd>'</kbd> = Abrir/fechar terminal
- <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>p</kbd> = Configurações rápidas

### Referencias/Estudar

- https://swiperjs.com/
- https://animejs.com/
- https://threejs.org/
- https://tympanus.net/codrops/category/tutorials/
- https://tympanus.net/Development/PageTransitions/
- https://tobiasahlin.com/moving-letters/
- https://tympanus.net/Tutorials/RotatedRevealers/index.html#

### Projetos
- Instalar VSCode
- Plugins essenciais
- Iniciando projeto HTML/CSS
- Imagens
- Frameworks
- Menu fixo
- Scroll suave
- Subir ao topo
- Efeito hover
- Animações CSS
- Links em nova aba
- Rodar VSCode dentro do navegador com Github
- Como configurar OG Image
- Como enviar formularios
- Como alterar fonte padrão
- Box-sizing
- Z-index
- Display flex
- Media queries
- SASS
- Botao Whatsapp
- Link para abrir email
- Link para abrir telefone

### Processo
- Escrever conteúdo blog
- Codificar conteúdo
- Design Figma
- Gravar/editar video
- Publicar conteudo (redes sociais/video)
