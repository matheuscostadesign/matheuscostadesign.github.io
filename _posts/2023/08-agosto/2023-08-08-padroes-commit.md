---
layout: post
title: "Padrões de mensagens de commit"
description: "Aprenda neste artigo algumas convenções/padronizações das mensagens de commits para o Git/Github."
slug: padroes-de-mensagens-de-commit
author: Matheus Costa
categories: Git
image: assets/images/posts/2023/08/padroes-de-mensagens-de-commit.jpg
comments: true
---

> Aprenda neste artigo algumas convenções/padronizações das mensagens de commits para o Git/Github.

## Padronização de Commits

### Formato:

```
<tipo>(escopo): Assunto
<corpo>
Tipo
```

Os valores permitidos para o `tipo` são:

- `feat`: _Nova funcionalidade_;
- `fix` : _Correção de um bug_;
- `refactor`: _Alterações em geral_;
- `style`: _Estilização e layout_;
- `docs`: _Algo relacionado a documentação_;
- `perf`: _Melhorias de performance_;
- `chore`: _Build, configs, deploy e afins_;
- `test`: _Adicionar ou corrigir testes_;

### Escopo

Informe qual escopo (projeto) está sendo alterado. Valores permitidos para o `escopo`:

- `adm`: FreedomNEO - ADM
- `app`: FreedomNEO - APP Portaria
- `frq`: FreedomNEO - Franqueados
- `www`: FreedomNEO - Landing-page

### Assunto

- Máximo de 50 caracteres
- Assunto deve estar no _imperativo_

### Corpo

- _Opcional_
- Deve conter o `o que` e o `por que` ao invés de conter o `como` foi feito
- Se for necessário contextualizar o commit ou explicar o porquê das mudanças, fique a vontade!

### Exemplo de Commit:

```
refactor(app): Bloqueia edição da placa do veículo
Inclui trava para o usuário não conseguir editar a placa do veículo
```

## Referências

- Essa padronização das mensagens tem como base o [Karma Commit](https://karma-runner.github.io/1.0/dev/git-commit-msg.html)
