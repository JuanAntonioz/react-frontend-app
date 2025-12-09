# Architecture

This document outlines the project structure and design patterns to keep a clear split between infrastructure and business domains while remaining scalable.

## Table of Contents
- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Naming Conventions](#naming-conventions)

## Architecture Overview

We follow a **feature-based modular architecture**: infrastructure lives in `core` (router, API, auth, shared UI) and each business domain lives in `modules` (for example, `auth`, `users`). This separation reduces coupling and allows new modules to be added without changing the base.

- **Core (Infrastructure):** Contains code agnostic to the business logic (UI Kit, Network Client, Session Management, Storage Adapters).
- **Modules (Domain):** Contains specific features (e.g., `users`, `auth`). Each module is self-contained with its own routes, hooks, and types.

## Project Structure

```text
src/
├── core/                  # INFRASTRUCTURE (Cross-cutting concerns)
│   ├── api/               # Network Strategy
│   │   └── rest/          # HTTP Clients (Factory pattern + Instances)
│   ├── auth/              # Global Authentication Session
│   ├── router/            # Guards and Routes configuration
│   ├── storage/           # Typed LocalStorage Adapter
│   ├── theme/             # Design configuration
│   └── ui/                # Internal Design System
│       ├── collections/   # Data display (VirtualList, Tables)
│       ├── feedback/      # Interaction feedback (Modals, Spinners)
│       ├── forms/         # Input controls (Inputs, Selects)
│       ├── layout/        # Structural components (Stack, Grid)
│       └── primitives/    # Base atoms (Button, Typography, Icon)
│
├── modules/               # BUSINESS DOMAINS
│   ├── auth/              # Feature: Identity Management
│   │   ├── components/    # Feature-specific UI (LoginForm)
│   │   ├── hooks/         # Logic & State (useLogin)
│   │   ├── pages/         # View Composition (LoginPage)
│   │   └── endpoints.ts   # API Paths constants
│   │
│   └── users/             # Feature: User Directory
│       ├── components/    # Feature-specific UI (UserCard)
│       ├── hooks/         # Data fetching (useGetUsers)
│       ├── pages/         # View Composition (UserListPage)
│       ├── types/         # Domain Interfaces (User)
│       └── endpoints.ts   # API Paths constants
│
├── App.tsx                # Composition Root (Providers)
├── main.tsx               # Entry Point
└── index.css              # Global styles & Theme import
```

## Naming Conventions

- Files and directories: `kebab-case` (e.g., `user-profile/`, `user-card.tsx`).
- Components: `kebab-case` for filenames and component identifiers where allowed.
- Functions and variables: `kebab-case` for filenames and exported symbols where allowed.
