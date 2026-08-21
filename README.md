# Transit Fleet API

🇧🇷 [Português](#português) | 🇺🇸 [English](#english)

---

## Português

REST API para gestão de frota de transporte público, construída como estudo aplicado dos conceitos usados na minha pesquisa acadêmica sobre otimização de frotas com redes neurais.

### Stack

- **NestJS** + TypeScript
- **Prisma ORM** + SQLite
- **Swagger** (documentação interativa)
- Validação com `class-validator`

### Funcionalidades

CRUD completo de veículos:
- `POST /vehicles` — cadastra um veículo
- `GET /vehicles` — lista todos os veículos
- `GET /vehicles/:id` — busca um veículo específico
- `PATCH /vehicles/:id` — atualiza um veículo
- `DELETE /vehicles/:id` — remove um veículo

### Como rodar localmente

\`\`\`bash
npm install
npx prisma generate
npx prisma migrate dev
npm run start:dev
\`\`\`

Documentação interativa (Swagger) disponível em `http://localhost:3000/docs`

### Próximos passos

- Autenticação com JWT
- Testes automatizados
- Entidades relacionadas (Driver, Route, Trip)
- Deploy

---

## English

REST API for public transit fleet management, built as an applied study of concepts used in my academic research on fleet optimization with neural networks.

### Stack

- **NestJS** + TypeScript
- **Prisma ORM** + SQLite
- **Swagger** (interactive docs)
- Validation with `class-validator`

### Features

Full vehicle CRUD:
- `POST /vehicles` — create a vehicle
- `GET /vehicles` — list all vehicles
- `GET /vehicles/:id` — get a specific vehicle
- `PATCH /vehicles/:id` — update a