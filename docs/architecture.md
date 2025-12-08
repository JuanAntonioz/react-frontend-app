# Architecture

This document outlines the project structure and design patterns to keep a clear split between infrastructure and business domains while remaining scalable.

## Table of Contents
- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Naming Conventions](#naming-conventions)

## Architecture Overview

We follow a **feature-based modular architecture**: infrastructure lives in `core` (router, API, auth, shared UI) and each business domain lives in `modules` (for example, `auth`, `users`). This separation reduces coupling and allows new modules to be added without changing the base.

## Project Structure

```text
src/
├── core/                # Infrastructure (cross-cutting)
│   ├── api/             # Network layer (Axios + interceptors)
│   ├── auth/            # Global session (AuthProvider)
│   ├── router/          # Routing and guards
│   └── ui/              # Generic UI kit (buttons, inputs)
│
├── modules/             # Business domains
│   ├── auth/            # Identity (login views)
│   └── users/           # User directory (private views)
│       ├── components/  # Domain-specific UI
│       ├── hooks/       # Domain fetching and logic
│       ├── pages/       # View composition
│       └── types/       # Domain interfaces
│
├── App.tsx              # Composition root (providers)
└── main.tsx             # Entry point
```

## Naming Conventions

- Files and directories: `kebab-case` (e.g., `user-profile/`, `user-card.tsx`).
- Components: `kebab-case` for filenames and component identifiers where allowed.
- Functions and variables: `kebab-case` for filenames and exported symbols where allowed.
