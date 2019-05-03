# Validador de CPF

**Esta biblioteca se destina à validação de CPF.**
Na versão atual é capaz de verificar se um número de CPF é válido ou invalido.

## Como instalar:

```shell

$  npm install validador-cpf-lib

```

## Como utilizar:

```node

> const validatorCPF = require('validador-cpf-lib');
> console.log(cpfValidator('289.499.132-08'))
> // return "true"
> console.log(cpfValidator('28949913208'))
> // return "true"
> console.log(cpfValidator('2894991320'))
> // return "false"
> console.log(cpfValidator('289499132088'))
> // return "false"
> console.log(cpfValidator('a8949913208'))
> // return "false"
```

## roadmap oficial do projeto

#### versão 1.0.0
- funcionalidade: Verifica se o CPF é válido ou invalido, através dos dígitos verificadores.
