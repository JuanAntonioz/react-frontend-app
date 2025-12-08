# React Frontend App

This repository is a practical template for building modern, modular, and reusable React front-end apps. It includes a lean stack and patterns to keep projects responsive, accessible, and high-performing while following the architecture and technical guidelines documented here.

## 📋 Key Features

- **Feature-Based Modularity:** Clear separation between infrastructure (`src/core`) and business domains (`src/modules`) to keep coupling low and enable growth.
- **Authentication & Routing:** Native React Context for session state plus guarded public/private routes.
- **Network Layer:** Centralized Axios instance with interceptors for token injection and error handling.
- **Consistency:** Naming follows `kebab-case` for files/directories (including components and functions) as outlined in the docs.

## 🛠 Tech Stack

- **Core:** React 19, TypeScript, Vite
- **Routing:** React Router v7
- **Network:** Axios
- **Styling:** CSS Modules and/or TailwindCSS

## ⚙️ Development Workflow

### Prerequisites
- Node.js (v22+ recommended)
- npm

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Start the local server:**
   ```bash
   npm run dev
   ```

## 🏗 Architecture

The project follows a feature-based modular architecture. Infrastructure lives in `src/core` (router, API, auth, shared UI), and business domains live in `src/modules` (for example, `auth`, `users`). This separation keeps the codebase scalable and easier to extend with new domains.

- Detailed guides:
  - [Architecture](docs/architecture.md)
  - [Technical Decisions](docs/technical-decisions.md)

## 🔐 Demo Access

The application runs with a mock authentication server for demonstration purposes. Use the following credentials to access the private routes:

- Email: `admin@demo.com`
- Password: `admin`
