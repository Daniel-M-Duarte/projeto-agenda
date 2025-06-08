Agenda de Contatos
Este projeto é uma Agenda de Contatos completa, projetada para gerenciar suas informações de contato de maneira eficiente e segura. Com um sistema robusto de autenticação de usuários e funcionalidades CRUD (Criar, Ler, Atualizar, Deletar) para gerenciar contatos, você terá suas informações sempre acessíveis e protegidas.Tecnologias Utilizadas
Backend

Node.js: Ambiente de execução JavaScript escalável e eficiente.
Express.js: Framework web que facilita a construção de APIs.
Mongoose: ODM (Object Data Modeling) para interação simplificada com o MongoDB.
Express-Session: Middleware para gerenciamento seguro de sessões de usuário.
Connect-Mongo: Armazenamento persistente de sessões no MongoDB Atlas.
Bcrypt.js: Biblioteca para hashing seguro de senhas.
Csurf: Proteção contra ataques CSRF (Cross-Site Request Forgery).
Express-Flash: Sistema para exibir mensagens temporárias de feedback ao usuário (erros, sucesso).
Dotenv: Carregamento de variáveis de ambiente de forma prática.
Promises: Utilizadas para gerenciar operações assíncronas de forma eficiente e legível.

Frontend

EJS (Embedded JavaScript): Motor de templates para renderização dinâmica das views no servidor.
JavaScript: Lógica de frontend e interações dinâmicas com o usuário.
Bootstrap: Framework CSS para estilização responsiva e moderna da interface.

Banco de Dados

MongoDB Atlas: Serviço de banco de dados NoSQL em nuvem, garantindo alta disponibilidade e escalabilidade.

Funcionalidades
Autenticação de Usuários

Criação de Conta: Permite que novos usuários se registrem facilmente na aplicação.
Login/Logout: Sistema seguro para acesso personalizado.
Sessões Persistentes: Usuários permanecem logados entre as sessões, graças ao armazenamento no MongoDB.

Gerenciamento de Contatos (CRUD Completo)

Criação de Contato: Adicione novos contatos com informações como nome, sobrenome, e-mail e telefone.
Listagem de Contatos: Visualize todos os seus contatos de forma organizada.
Edição de Contato: Atualize informações de contatos existentes com facilidade.
Exclusão de Contato: Remova contatos indesejados da sua agenda.

Segurança

Hashing de Senhas: As senhas são armazenadas de maneira segura (hashed) no banco de dados.
Proteção CSRF: Mecanismos para impedir ataques de falsificação de requisição entre sites.
Mensagens Flash: Feedback imediato ao usuário sobre o sucesso ou falha em operações realizadas.

Como Executar o Projeto
Siga os passos abaixo para configurar e executar o projeto em sua máquina local:Pré-requisitos

Node.js: Versão LTS recomendada.
MongoDB Atlas: Conta gratuita para configuração do banco de dados.
Git: Para clonar o repositório.

1. Clonar o Repositório
Codegit clone https://github.com/seu-usuario/seu-projeto-agenda.gitcd seu-projeto-agenda2. Instalar Dependências
Codenpm install3. Configurar Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:Code# String de conexão do MongoDB Atlas# Substitua <username>, <password>, <cluster-url> e <database-name> pelos seus dadosCONNECTIONSTRING=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority# Chave secreta para assinatura dos cookies de sessãoSESSION_SECRET=uma_chave_secreta_muito_forte_e_aleatoria_para_sua_sessao# Porta onde o servidor Express vai rodar (ex: 3000, 8080)PORT=3000Obtendo sua CONNECTIONSTRING do MongoDB Atlas:

Faça login no painel do MongoDB Atlas.
Navegue até o seu Cluster.
Clique em "Connect".
Selecione "Connect your application".
Escolha o driver "Node.js" e a versão apropriada.
Copie a string de conexão fornecida e cole-a no seu arquivo .env, substituindo os placeholders.

4. Iniciar o Servidor
Codenpm startO servidor será iniciado na porta especificada no seu arquivo .env (padrão: 3000). Você pode acessar a aplicação em seu navegador em: http://localhost:3000.
