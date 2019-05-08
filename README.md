# Validador de CPF

**Esta biblioteca se destina à validação de CPF.**
Na versão atual é capaz de verificar se um número de CPF é válido ou invalido.

## Como instalar:

```shell

$  npm install validatorcpf

```

## Como utilizar:

```node

> const cpfValidator = require('validatorcpf');
> console.log(cpfValidator.cpfValidator('289.499.132-08'))
> // return "true"
> console.log(cpfValidator.cpfValidator('28949913208'))
> // return "true"
> console.log(cpfValidator.cpfValidator('2894991320'))
> // return "false"
> console.log(cpfValidator.cpfValidator('289499132088'))
> // return "false"
> console.log(cpfValidator.cpfValidator('a8949913208'))
> // return "false"
```

## roadmap oficial do projeto

#### versão 1.0.0
- funcionalidade: Verifica se o CPF é válido ou invalido, através dos dígitos verificadores.
