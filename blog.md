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
