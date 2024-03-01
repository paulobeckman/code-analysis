<h4 align="center"> 
	🚀 Code Analysis 🚀
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/paulobeckman/code-analysis?color=%2304D361">
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/paulobeckman/code-analysis">
  
  <a href="https://www.linkedin.com/in/paulobeckman/">
    <img alt="Made by paulobeckman" src="https://img.shields.io/badge/made%20by-paulobeckman-%2304D361">
  </a>
	
  
  <a href="https://github.com/paulobeckman/code-analysis/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/paulobeckman/code-analysis">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/paulobeckman/code-analysis/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/paulobeckman/code-analysis?style=social">
  </a>
</p>

## 💻 Sobre o projeto

Code Analysis é um projeto que visa ter a implementação de conceitos de Copiladores na prática.

### Visualização

##### Visualize a aplicação web aqui: [Code Analysis](https://code-analysis.netlify.app/)

### Backlog e Desenvolvimento do Projeto

##### Visualize aqui: [Projeto Code Analysis](https://github.com/users/paulobeckman/projects/1)

### Códigos Principais

- **Análise léxica:** O código responsável por realizar a análise léxica, encontra-se [aqui](https://github.com/paulobeckman/code-analysis/blob/development/src/utils/lexicalAnalyzer.ts). Esse código é executado, quando se insere um valor [no input dessa página](https://code-analysis.netlify.app):

  <img alt="code-analysis" title="#code-analysis" src="./github-assets/lexicalAnalyzer.png" width="800px">
<br/>

- **Teste de expressões regulares:** O código responsável por realizar o teste de expressões regulares, encontra-se [aqui](https://github.com/paulobeckman/code-analysis/blob/development/src/utils/regularExpressions.ts). Essas duas funções são utilizadas para testar as expressões regulares, que são informadas no input, juntamente com a string que será testada [veja aqui nessa página](https://code-analysis.netlify.app):
  <img alt="code-analysis" title="#code-analysis" src="./github-assets/regularExpressions.png" width="800px">

## 🛠 Tecnologias

As seguintes ferramentas estão sendo usadas na construção do projeto:

- [Typescript][ts]
- [ReactJS][react]
- [ViteJS][vitejs]
- [NodeJS][nodejs]
- [Tailwindcss][tailwind]
- [React Hook Form][react-hook-form]
- [React Router][react-router]

## 🚀 Como rodar este projeto

💡 Esse projeto conta com somente com o Front End.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs].
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

### 🎲 Rodando aplicação web (Front End)

```bash
# Clone o Repositorio
$ git clone https://github.com/paulobeckman/code-analysis.git
```

### 💻 Rode o Project Web

```bash
# Vá para a pasta do projeto
$ cd code-analysis

# Instale as depedencias
$ npm install

# Rode a aplicação
$ npm run dev
```

Acesse: http://localhost:3000/ para ver o resultado.

## 📝 Licença

Este projeto esta sobe a licença MIT. Veja a [LICENÇA](license) para saber mais.

Feito por Paulo Beckman 👋🏽 [Entre em contato!](https://br.linkedin.com/in/paulobeckman)

[nodejs]: https://nodejs.org/
[vscode]: https://code.visualstudio.com/
[license]: https://opensource.org/licenses/MIT
[ts]: https://www.typescriptlang.org/
[react]: https://reactjs.org/
[tailwind]: https://tailwindcss.com/
[react-hook-form]: https://react-hook-form.com/
[react-router]: https://reactrouter.com/en/main
[vitejs]: https://vitejs.dev/
