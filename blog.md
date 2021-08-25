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
