### Otimização de imagem (Lazy Load)

```html
<img src="imagem.png" alt="Texto alternativo" loading="lazy" />
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
  color: var(--white);
  background-color: var(--color-primary);
}
::selection {
  color: var(--white);
  background-color: var(--color-primary);
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

### Redirecionamento personalizado IIS (web.config)

```xml
<httpErrors errorMode="Custom" existingResponse="Replace">
<clear />
<error statusCode="404" path="http://www.bing.com" responseMode="Redirect"/>
</httpErrors>
```

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

### Forçar execução dos scripts somente após leitura de todo código HTML

```js
<script src="scripts.js" defer></script>
```

### Referencias/Estudar

- https://swiperjs.com/
- https://animejs.com/
- https://threejs.org/
- https://tympanus.net/codrops/category/tutorials/
- https://tympanus.net/Development/PageTransitions/
- https://tobiasahlin.com/moving-letters/
- https://tympanus.net/Tutorials/RotatedRevealers/index.html#
