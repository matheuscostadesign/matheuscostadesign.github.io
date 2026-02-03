---
title: "Como criar apps com React Native"
description: "Neste post estarei compartilhando e documentando minha experiência durante o processo de criação de aplicativos Android e iOS utilizando React Native."
slug: como-criar-apps-com-react-native
author: Matheus Costa
categories: React Native
image: /assets/images/posts/2023/05/como-criar-apps-com-react-native.jpg
comments: true
---

> Neste post estarei compartilhando e documentando minha experiência durante o processo de criação de aplicativos **Android e iOS** utilizando React Native.

# 1) Configuração do ambiente

## 1.2) Quais as ferramentas de desenvolvimento?

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/)
  - _Extensões:_ [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native) _e_ [Expo Tools](https://marketplace.visualstudio.com/items?itemName=byCedric.vscode-expo)
- [Android Studio](https://developer.android.com/studio)
- [Genynobile Scrcpy](https://github.com/Genymobile/scrcpy) (Para espelhar o smartphone no computador)

## 1.3) Criando um app em React Native (com Expo)

### Criando o app

```bash
npx create-expo-app NomeApp
```

O comando acima irá criar um o aplicativo utilizando o [Expo](https://expo.dev/).

### Executando o app

```bash
cd NomeApp
npx expo start
```

_Observações:_

- Instalar o app **Expo Go** (Android/iOS\*)
- Ler o QR-Code gerado através do aplicativo Expo Go;
  - \*no iOS basta ler o QR-Code com o aplicativo de câmera;

## 1.4) Criando um app em React Native (por CLI)

_Observações:_

- Ambiente: **Windows**
- Dispositivo: **Android**
- Conectar o dispositivo Android no computador via cabo USB;
- No aparelho, **habilitar o modo de desenvolvedor** e **permitir a depuração USB**;
- Ao conectar o celular no computador, **permitir a transferência de arquivos**;

### Criando o app

```bash
npx react-native@latest init NomeApp
```

O comando acima irá criar todos os arquivos necessários para o app;

### Iniciando o app

```bash
cd NomeApp
npx react-native run-android
```

O aplicativo será instalado automaticamente no aparelho Android

Também é possível iniciar com Metro\* separadamente com o comando:

```bash
npx react-native start
```

\*o Metro é muito parecido com o webpack (React para web) — só que p/ para apps — ele é um empacotador de JavaScript.

### Atalhos

Podemos personalizar os atalhos para executar o app em modo de desenvolvimento;

Para isso, basta editar o arquivo `package.json.`

```json
"scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "lint": "eslint .",
    "start": "react-native start",
    "dev": "react-native start --reset-cache",
    "test": "jest"
  }
```

No exemplo acima foi adicionado o atalho `“dev”` com `—reset-cache`.

Assim podemos iniciar o modo de desenvolvimento com:

```bash
npm run dev
```

---

# 2) O básico

## 2.1) O que é o React Native?

React Native é uma **estrutura híbrida** e de código aberto para criar apps para _Android_ e _iOS_ usando [**React**](https://reactjs.org/);

Para aprender React Native é necessário saber os **fundamentos de Javascript, HTML e CSS.**

- [**Fundamentos de Javascript**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [**Uma reintrodução ao JavaScript**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Language_overview)

## 2.2) Desenvolvimento Nativo x Híbrido

- Para criar apps nativos em **Android** utilizamos a linguagem **Java ou Kotlin;**

- Para criar apps nativos para **iOS** é necessário codificar em **Swift ou Objective-C;**

- O React Native é uma **estrutura híbrida** e utiliza a linguagem **Javascript** para criar as visualizações correspondentes do Android e iOS em tempo de execução;

## 2.3) Componentes principais

- O React Native possui muitos componentes principais, como por exemplo:

| React Native   | Android        | iOS              | Web (similaridade)    |
| -------------- | -------------- | ---------------- | --------------------- |
| `<View>`       | `<ViewGroup>`  | `<UIView>`       | `<div>`               |
| `<Text>`       | `<TextView>`   | `<UITextView>`   | `<p>`                 |
| `<Image>`      | `<ImageView>`  | `<UIImageImage>` | `<img>`               |
| `<ScrollView>` | `<ScrollView>` | `<UIScrollView>` | `<div> `              |
| `<TextInput>`  | `<EditText>`   | `<UITextField>`  | `<input type="text">` |

### 2.3.1) Amostra das visualizações no Android x iOS

<img src="/assets/images/posts/2023/05/android-e-ios-react-native.png" alt="Android x iOS">

## 2.4) Fundamentos de React

- React Native é executado com base no React, por isso, é necessário saber os fundamentos de:

  - 2.4.1) componentes
  - 2.4.2) JSX
  - 2.4.3) props
  - 2.4.4) estado

### 2.4.1) Componentes

- **Um componente é um elemento básico da interface do usuário;**

- Podemos criar componentes de função (_hooks com estado_) e com classes (_forma antiga_);

- O React Native irá renderizar no aparelho do usuário o componente de acordo com o sistema operacional do dispositivo (iOS ou Android);

```jsx
import React from "react";
import { Text } from "react-native";

const Cat = () => {
  return <Text>Hello, I am your cat!</Text>;
};

export default Cat;
```

### 2.4.2) JSX

- JSX é uma extensão da sintaxe do JavaScript que **permite escrever HTML dentro do JavaScript**;

- **Em JSX podemos misturar JavaScript e HTML** (ou XML) **em um único arquivo**;

- Como JSX é JavaScript, podemos usar **variáveis** dentro dele;

- Qualquer expressão JavaScript funcionará entre chaves no JSX, como por exemplo:

```jsx
import React from "react";
import { Text } from "react-native";

const getFullName = (
  firstName: string,
  secondName: string,
  thirdName: string
) => {
  return firstName + " " + secondName + " " + thirdName;
};

const Cat = () => {
  return <Text>Hello, I am {getFullName("Rum", "Tum", "Tugger")}!</Text>;
};

export default Cat;
```

### 2.4.3) Props

- Props é uma abreviação para **propriedades**;

- **As propriedades permitem personalizar os componentes React,** por exemplo:

```jsx
import React from "react";
import { Text, View } from "react-native";

const Cat = (props) => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Cat name="Spot" />
    </View>
  );
};

export default Cafe;
```

### 2.4.4) Estado

- **Estado** é a forma de **armazenar dados** de um componente;

- **O estado fornece memória aos componentes;**

- Ele é útil para lidar com **dados que mudam** com o **tempo** ou que vêm da **interação do usuário;**

- É possível adicionar estado a um componente React usando o hook `useState`;

- `useState` é um hook que permite adicionar estado aos componentes da função;

```jsx
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
    </View>
  );
};

const Cafe = () => {
  return <Cat name="Munkustrap" />;
};

export default Cafe;
```

### 2.4.5) Fragmentos

- As tags “vazias” `<>` e `</>` acima são bits do JSX chamadas de [fragmentos](https://reactjs.org/docs/fragments.html).

- Fragmentos permitem envolver todo código sem precisar incluir um elemento extra e desnecessário, como uma `View`, por exemplo.

```jsx
const Cafe = () => {
  return (
    <>
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
    </>
  );
};
```

## 2.5) Código específico Android/iOS

- Com React Native é possível **implementar componentes visuais separados** p/ Android e iOS;

- Há duas maneiras de separar o código por plataforma:

  1. **Usando o \*Platform Module**;\*
  2. **Usando extensões de arquivos específicas;**

### **Platform Module**

- Essa opção é recomendada **para pequenas partes de código;**

- É possível usar a lógica de detecção para implementar o código específico da plataforma;

#### **Platform:**

```jsx
import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  height: Platform.OS === "ios" ? 200 : 100,
});
```

#### **Platform.select - pode ser: `'ios' | 'android' | 'native' | 'default'`**

```jsx
import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: "red",
      },
      android: {
        backgroundColor: "green",
      },
      default: {
        // outras plataformas, web por exemplo
        backgroundColor: "blue",
      },
    }),
  },
});
```

#### **Detectar a versão do Android:**

```jsx
import { Platform } from "react-native";

if (Platform.Version === 25) {
  console.log("Running on Nougat!");
}
```

#### **Detectar a versão do iOS:**

```jsx
import { Platform } from "react-native";

const majorVersionIOS = parseInt(Platform.Version, 10);
if (majorVersionIOS <= 9) {
  console.log("Work around a change in behavior");
}
```

### **Extensões de arquivos específicas**

- Recomendado para **códigos específicos da plataforma mais complexos;**

- Com essa opção é possível **dividir o código em arquivos separados**;

- Para utilizar esse opção é só criar o componente com o nome de cada plataforma, por exemplo:

```jsx
BigButton.ios.js;
BigButton.android.js;
```

Depois, basta importar o componente e o **React Native selecionará automaticamente o arquivo correto com base na plataforma em execução:**

```jsx
import BigButton from "./BigButton";
```

---

# 3) Design

## 3.1) Style

- Todos os componentes principais aceitam a propriedade `style`

- Os nomes dos estilos e valores correspondem à maneira como o CSS funciona na web;

- Porém os nomes são escritos no **formato _camelCase_**, por exemplo:

- `backgroundColor` ao invés de `background-color`;

- A medida que o componente cresce em complexidade é mais limpo usar `StyleSheet.create`

```jsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  red: {
    color: "red",
  },
});

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>just red</Text>
    </View>
  );
};

export default LotsOfStyles;
```

## 3.2) Largura e altura (Width/Height)

- Todas as dimensões no React Native **não precisam de unidade (px, rem, etc)**

- As dimensões representam pixels independentes da densidade.

```js
import React from "react";
import { View } from "react-native";

export function FixedDimensionsBasics() {
  return (
    <View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
        }}
      />
    </View>
  );
}
```

- Também é possível utilizar valores percentuais no estilo do componente

- As dimensões percentuais também **requerem um elemento pai** com o tamanho definido;

```js
import React from "react";
import { View } from "react-native";

const PercentageDimensionsBasics = () => {
  return (
    <View style={{ height: "100%" }}>
      <View
        style={{
          height: "10%",
          backgroundColor: "#212121",
        }}
      />
      <View
        style={{
          width: "66%",
          height: "90%",
          backgroundColor: "#555555",
        }}
      />
    </View>
  );
};

export default PercentageDimensionsBasics;
```

## 3.3) Layout com Flexbox

- Por padrão **todos os componentes do React Native são _flex_ e direcionados por _coluna;_**

- **Na web o padrão é por linha (row), um ao lado do outro;**

- Já no React Native, **o padrão é por coluna (column), um em baixo do outro;**
  - **`display: flex`**
  - `flexDirection: column`
- Para que um componente seja expandido e reduzido dinamicamente com base no espaço disponível podemos utilizar `flex: 1`;

<cite>Um componente só pode expandir para preencher o espaço disponível se seu pai tiver dimensões maiores que `0`.</cite>

### Exemplo de layout com Flexbox:

```js
import React from "react";
import { View } from "react-native";

const FlexDimensionsBasics = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "powderblue" }} />
      <View style={{ flex: 2, backgroundColor: "skyblue" }} />
      <View style={{ flex: 3, backgroundColor: "steelblue" }} />
    </View>
  );
};

export default FlexDimensionsBasics;
```

- Todas as outras propriedades do Flexbox estão disponíveis no React Native:
  - Flex-Direction: `column` `row` `columnReverse` `rowReverse`
  - Layout-Direction: `LTR` `RTL`
  - Justify-Content: \*\*\*\*`flexStart` `flexEnd` `center` `spaceBetween` `spaceAround` `spaceEvenly`
  - Align-Items: `stretch` `flex-start` `flex-end` `center` `baseline`
  - Align-Self e Align-Content
  - Flex-Wrap, Flex-Basis, Grow e Shrink
  - Row-Gap, Column-Gap e Gap
  - Posição absoluta e relativa: `relative` `absolute`

## 3.4) Imagens

- O React Native fornece uma maneira unificada de gerenciar imagens e outros ativos de mídia em seus aplicativos Android e iOS;

### Imagens Estáticas

- Para adicionar uma imagem estática, basta importar o componente `Image`

```jsx
import { Image } from "react-native";
```

- Depois é só chamar o componente de imagem e inserir o caminho do arquivo:

```jsx
<Image source={require("./src/assets/imagem.png")} />
```

_Observações:_

- Podemos usar os sufixos `@2x`e `@3x`para **fornecer imagens para diferentes densidades de tela**.

```
└── img
    ├── check.png
    ├── check@2x.png
    └── check@3x.png
```

- E chamar a imagem normalmente:

```jsx
<Image source={require("./img/check.png")} />
```

### Imagens na Rede

- Também podemos exibir imagens que não estão no projeto
- Porém, ao contrário dos recursos estáticos, **precisamos especificar as dimensões da imagem;**

```js
// CORRETO
<Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 400, height: 400}} />

// ERRADO
<Image source={{uri: 'https://reactjs.org/logo-og.png'}} />
```

### Imagens de fundo (Background-Image)

- Para exibir imagens de fundo podemos usar o componente `<ImageBackground>`;
- Ele tem as mesmas propriedades que o componente `<Image>`
- Exemplo simples:

```js
<ImageBackground source={...} style={{width: '100%', height: '100%'}}>
  <Text>Inside</Text>
</ImageBackground>
```

- Exemplo completo com imagem na rede:

```js
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
```

## 3.5) Cores

- Os componentes no React Native são estilizados usando Javascript;
- As propriedades de cores geralmente **correspondem à forma como o CSS funciona na web;**

### Cores em Hexadecimal

- É possível inserir cores conforme o padrão da web que é hexadecimal, como por exemplo:
  - `#fafafa`
  - `#000000`
  - `#000` (abreviado)

### Cores em RGB

- React Native tem suporte para cores em `rgb()` e `rgba()`
  - `'#f0f'` (#rgb)
  - `'#ff00ff'` (#rrggbb)
  - `'#f0ff'` (#rgba)
  - `'#ff00ff00'` (#rrggbbaa)
  - `'rgb(255, 0, 255)'`
  - `'rgb(255 0 255)'`
  - `'rgba(255, 0, 255, 1.0)'`
  - `'rgba(255 0 255 / 1.0)'`

### Cores Nomeadas

- No React Native, também podemos usar strings de nomes de cores como valores;
  - **`transparent` (**Um atalho para `rgba(0,0,0,0)`)
  - `aliceblue, coral, green, blue, etc...`
  - [_A lista completa de cores pode ser acessada aqui_](https://www.w3.org/TR/css-color-3/#svg-color)

### Cores em HSL

- Também é possível usar `hsl()` e `hsla()`:
  - `'hsl(360, 100%, 100%)'`
  - `'hsl(360 100% 100%)'`
  - `'hsla(360, 100%, 100%, 1.0)'`
  - `'hsla(360 100% 100% / 1.0)'`

### Cores em Matriz (HWB)

- React Native suporta `hwb()`em notação funcional:
  - `'hwb(0, 0%, 100%)'`
  - `'hwb(360, 100%, 100%)'`
  - `'hwb(0 0% 0%)'`
  - `'hwb(70 50% 0%)'`

---

# 4) Gestos e Toques

- Com o React Native é possível lidar com todos os tipos de gestos comuns;

### 4.1) Botões

- Um botão é um componente básico que é renderizado em todas as plataformas;

### Botão simples

- Um exemplo básico é o botão:

```jsx
<Button
  onPress={() => {
    console.log("O botão foi pressionado!");
  }}
  title="Toque aqui"
  color="#841584"
/>
```

### Componentes tocáveis (**Touchables)**

- Os componentes "tocáveis" podem capturar gestos de toque e exibir feedback;

```
<TouchableHighlight
  onPress={() => {
    console.log('O botão foi pressionado!');
  }}
  underlayColor="white">
  <View>
    <Text>TouchableHighlight</Text>
  </View>
</TouchableHighlight>;
```

## 4.2) Navegação entre telas

- Aplicativos raramente são compostos de **uma única tela**.
- No React Native, a **forma mais simples de criar a navegação entre telas e guias é usando o [React Natigation](https://reactnavigation.org/);**

### **React Navigation**

- Primeiramente é preciso instalar a biblioteca:

```bash
npm install @react-navigation/native @react-navigation/native-stack
```

### Dependências do React Navigation

- Se for um projeto **React Native simples**, instale as dependências com `npm`:

```bash
npm install react-native-screens react-native-safe-area-context
```

- Se for um projeto **gerenciado pelo Expo**, instale as dependências com `expo`:

```bash
npx expo install react-native-screens react-native-safe-area-context
```

### Envolvendo a aplicação

- Agora precisamos envolver todo o aplicativo com o `NavigationContainer`.
- Isso é feito no arquivo de entrada de nosso projeto, como `index.js`ou `App.js`:

```jsx
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>{/* Restante da aplicação */}</NavigationContainer>
  );
};

export default App;
```

### Criando as telas

- Exemplo completo abaixo com 2 telas:
  - 1. Tela inicial (_HomeScreen_)
  - 2. Tela de perfil (_ProfileScreen_)

```jsx
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
```

### Navegando entre as telas

- Cada tela `<Stack.Screen>` tem uma propriedade chamada: `component`;
- A propriedade `component` é uma referência a um componente React;
- Esses componentes recebem uma propriedade chamada `navigation`;
- O `navigation` possui vários métodos para vincular a outras telas;

### Componente _HomeScreen.jsx_

```jsx
const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to profile screen"
      onPress={() => navigation.navigate("Profile", { name: "Jane" })}
    />
  );
};
```

### Componente _ProfileScreen.jsx_

```jsx
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
```

---

# 5) Observações Expo

- Fluxos de trabalho no Expo
  - Managed Workflow (padrão, sem acesso as pastas Android e iOS)
  - Bare Workflow
  - Development Builds
    - Config Plugins
    - Custom Clients

Parar mudar um fluxo Managed Workflow para Bare Workflow basta rodar o comando:

```jsx
npx expo prebuild
```

https://docs.expo.dev/workflow/prebuild/

Configurar Build

https://docs.expo.dev/build/setup/

Gerar APK

https://docs.expo.dev/build-reference/apk/
