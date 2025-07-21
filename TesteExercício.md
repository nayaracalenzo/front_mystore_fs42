
*** Desafio de Teste Automatizado com Cypress: Cadastro de Usuário

Objetivo:
Você deve criar um teste E2E utilizando o Cypress para verificar se o formulário de cadastro está funcionando corretamente.

*** Requisitos do teste:
Acesse a página de cadastro da aplicação rodando em http://localhost:5173.

Preencha os campos:

* Nome de usuário (campo de texto)

* E-mail (campo de e-mail)

* Senha (campo de senha)

* Clique no botão Cadastrar.

* Verifique se aparece a mensagem de sucesso, com o nome do usuário incluído nela.


*** Dicas:
Use o comando`cy.visit()` para acessar a rota.

Use `cy.get()` para buscar os campos do formulário e o botão.

Use `.type()` para preencher e .click() para enviar.

Use `cy.contains()` ou `cy.get().should()` para verificar a mensagem final.

Certifique-se que o backend está rodando em `localhost:3000`.

*** Desafio Extra!

Tente criar também um cenário de erro no cadastro, como por exemplo tentar cadastrar com um e-mail já existente e validar se a mensagem de erro aparece.