Este projeto é uma Agenda de Contatos completa, desenvolvida para gerenciar seus contatos de forma eficiente. Ele inclui um sistema de autenticação de usuários e funcionalidades CRUD (Criar, Ler, Atualizar, Deletar) para os contatos, garantindo que suas informações estejam seguras e acessíveis.

Tecnologias Utilizadas
Backend:

Node.js: Ambiente de execução JavaScript.
Express.js: Framework web para construir a API.
Mongoose: ODM (Object Data Modeling) para interação com o MongoDB.
Express-Session: Middleware para gerenciamento de sessões de usuário.
Connect-Mongo: Armazenamento de sessões persistente no MongoDB Atlas.
Bcrypt.js: Para hashing seguro de senhas.
Express-Flash: Para exibir mensagens temporárias (erros, sucesso) para o usuário.
Dotenv: Para carregar variáveis de ambiente.
Promises (Assincronicidade): Utilizadas em todo o código para lidar com operações assíncronas de forma eficiente e legível.
Frontend:

EJS (Embedded JavaScript): Motor de templates para renderização das views no lado do servidor.
JavaScript: Lógica de frontend e interações do usuário.
Bootstrap: Framework CSS para estilização e responsividade da interface.
Banco de Dados:

MongoDB Atlas: Serviço de banco de dados NoSQL baseado em nuvem, garantindo alta disponibilidade e escalabilidade.
Funcionalidades
Autenticação de Usuários:

Criação de Conta: Permite que novos usuários se registrem na aplicação.
Login/Logout: Sistema seguro de login e logout para acesso personalizado.
Sessões Persistentes: Usuários permanecem logados entre as sessões graças ao armazenamento no MongoDB.
Gerenciamento de Contatos (CRUD Completo):

Criação de Contato: Adicione novos contatos com informações como nome, sobrenome, e-mail e telefone.
Listagem de Contatos: Visualize todos os seus contatos em uma interface organizada.
Edição de Contato: Atualize as informações de contatos existentes.
Exclusão de Contato: Remova contatos da sua agenda.
Segurança:

Hashing de Senhas: Senhas são armazenadas de forma segura (hashed) no banco de dados.
Proteção CSRF: Impede ataques de falsificação de requisição entre sites.
Mensagens Flash: Feedback dinâmico ao usuário sobre sucesso ou erro em operações.
Como Executar o Projeto
Siga estes passos para configurar e executar o projeto em sua máquina local:

Pré-requisitos
Node.js (versão LTS recomendada)
MongoDB Atlas (conta gratuita para configuração do banco de dados)
Git
1. Clonar o Repositório
Bash

git clone https://github.com/Daniel-M-Duarte/projeto-agenda.git
cd seu-projeto-agenda
2. Instalar Dependências
Bash

npm install
3. Configurar Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

# String de conexão do MongoDB Atlas
# Substitua <username>, <password>, <cluster-url> e <database-name> pelos seus dados
CONNECTIONSTRING=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority

# Chave secreta para assinatura dos cookies de sessão. Use uma string longa e aleatória.
SESSION_SECRET=uma_chave_secreta_muito_forte_e_aleatoria_para_sua_sessao

# Porta onde o servidor Express vai rodar (ex: 3000, 8080)
PORT=3000
Obtendo sua CONNECTIONSTRING do MongoDB Atlas:

Faça login no seu painel do MongoDB Atlas.
Navegue até o seu Cluster.
Clique em "Connect".
Selecione "Connect your application".
Escolha o driver "Node.js" e a versão apropriada.
Copie a string de conexão fornecida e cole-a no seu arquivo .env, substituindo os placeholders.
4. Iniciar o Servidor
Bash

npm start
O servidor será iniciado na porta especificada no seu arquivo .env (padrão: 3000).
Você pode acessar a aplicação em seu navegador: http://localhost:3000
