# ORPC Turborepo Starter

This is a monorepo project using [Turborepo](https://turbo.build/) with [ORPC](https://orpc.unnoq.com) for seamless type-safe API communication. The structure includes a **Next.js frontend**, a **Node-based backend**, and a **shared package** that houses common logic and routers.

## 🚀 Getting Started

Make sure you have `npm` installed.

```bash
# install dependencies
npm install

# start the development servers
npm run dev
```

This will start:

* Frontend (Next.js) on `http://localhost:3000`

* Api Docs (Scalar) on `http://localhost:3000/scalar`

* Backend (Node) serving APIs at /api/\*

### Available API Endpoints:

`GET /api/get-users` – Fetches a list of users.

`POST /api/create-users` – Create a user and return it.

## 🧠 ORPC Integration

This project uses orpc to create full-stack type-safe APIs:

The frontend uses @orpc/react-query to call endpoints.

The backend uses @orpc/zod and @orpc/openapi to handle and document the routes.

The shared router defines endpoints once and uses them both client-side and server-side.

## 🛠 Technologies Used

🧱 Turborepo – Monorepo tooling

⚡️ Nodejs – backend runtime

⚛️ React 19 – Next.js frontend

🌐 ORPC – Type-safe API routing

🧩 Zod – Schema validation

📄 Scalar API Docs – Auto-generated documentation

📦 Shared Package – Centralized logic and API router definitions
