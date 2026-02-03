---
title: "Como configurar path aliases em um projeto React + Vite + TypeScript + SWC"
description: "Veja neste post como configurar as importações com '@' (path aliases) em um projeto Vite/React com Typescript e SWC"
slug: como-configurar-path-aliases-em-um-projeto-react-com-vite-typescript-swc
author: Matheus Costa
categories: Front-end
image: /assets/images/posts/2024/06/como-configurar-path-aliases-em-um-projeto-react-com-vite-typescript-swc.jpg
comments: true
---

Veja neste post como configurar as importações com `'@'` **(path aliases)** em um projeto Vite/React com Typescript e SWC e melhorar a organização do código.

## Exemplos:

```tsx
// 🚫 Importação sem Path Aliases
import logo from "../../../../../../../assets/logo.png";

// 👍 Importação com Path Aliases
import logo from "@/assets/logo.png";
```

### Criação do projeto

Para configurar path aliases no Vite com o plugin React SWC, você precisa seguir alguns passos simples.

Primeiro, certifique-se de que seu projeto está configurado para usar o Vite com o plugin React SWC.

Se ainda não estiver, você pode criar um novo projeto usando o comando:

- `npm create vite@latest`

Selecione a opção React com a variante TypeScript + SWC durante a criação do projeto.

Depois de ter o projeto configurado, siga estas etapas para configurar os path aliases:

### 1) Instale as dependências necessárias:

Certifique-se de que você tem o ` @types/node`` instalado como uma dependência de desenvolvimento  `(npm i -D @types/node)`.

- Isso é necessário para evitar erros relacionados ao uso de `__dirname` em arquivos TypeScript ou JavaScript.

### 2) Configure o arquivo `vite.config.ts`

No seu arquivo `vite.config.ts`, você precisará importar o módulo path do Node.js e definir os aliases desejados na seção resolve.alias.

Aqui está um exemplo de como fazer isso:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path"; // Importe o módulo path

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
        // Defina seus aliases aqui
      },
    ],
  },
});
```

<cite>Neste exemplo, estamos configurando um alias para `"@"` que aponta para o diretório `src` do seu projeto.</cite>

Você pode adicionar mais aliases conforme necessário, seguindo o mesmo formato.

### 3) Atualize o arquivo `tsconfig.json`

Se você estiver usando TypeScript, também pode querer atualizar seu arquivo `tsconfig.json` para incluir as mesmas configurações de alias.

Isso garante que o TypeScript entenda como resolver esses caminhos.

Adicione ou atualize a seção `compilerOptions.paths` para corresponder aos seus aliases:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Com essas configurações, você agora deve ser capaz de usar os path aliases em seu projeto Vite com o plugin React SWC.

Dessa forma, você pode importar componentes da seguinte maneira:

```tsx
import logo from "@/assets/logo.png";
```

E não ficar procurando o caminho da pasta assim:

```tsx
import logo from "../../../../../../../assets/logo.png";
```
