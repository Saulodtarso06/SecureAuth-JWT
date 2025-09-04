# SecureAuth-JWT 🔐

Um sistema de autenticação baseado em **JSON Web Token (JWT)** desenvolvido em **Node.js + Express**, que permite criar um fluxo de login seguro com geração e validação de tokens.

---

## 🧩Funcionalidades

- Registro de usuários (signup)
- Login com geração de token JWT
- Proteção de rotas autenticadas
- Renovação de token (refresh token)
- Logout seguro
- Middleware para validação de token
- Hash de senha com **bcrypt**

---

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)  
- [Express](https://expressjs.com/)  
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)  
- [dotenv](https://github.com/motdotla/dotenv) 
  
---

## Instalação

Clone este repositório:

```bash
git clone https://github.com/Saulodtarso06/SecureAuth-JWT.git

cd SecureAuth-JWT
```
Instale as dependências:

---
```
npm i express
```
---
```
npm i jsonwebtoken dotenv-safe
```
---
Crie um arquivo .env / .env.example na raiz do projeto e configure as variáveis de ambiente:

```
#.env.example
JWT_SECRET=
JWT_EXPIRES=
```
---
```
#.env
JWT_SECRET=mysecret
JWT_EXPIRES=300
```
---
Inicie o servidor:

```
npm start
```
---
## Rotas da API
* Registro

**POST /auth/register**

* Cria um novo usuário.

* Login

**POST /auth/login**

* Autentica e retorna um token JWT.
* Rota Protegida
---
GET /protected
Exemplo de rota que exige autenticação via Bearer Token
---

Autentica e retorna um token JWT.

Rota Protegida
GET /protected
Exemplo de rota que exige autenticação via Bearer Token.

🧪 Exemplo de Requisição
```
POST /auth/login
Content-Type: application/json

{
  "email": "usuario@email.com",
  "password": "123456"
}
```
---
Resposta esperada:

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```
---

## 📌 Melhorias Futuras
* Integração com banco de dados (MongoDB / MySQL / PostgreSQL)

* Sistema de papéis (admin, usuário, etc.)

* Expiração e renovação de tokens com refresh token

* Testes automatizados com Jest
