# Architectural Decision Records (ADR)

This document outlines the key technical choices made during the development of this project, prioritizing performance, scalability, and standard engineering practices.

## 1. State Management: Native React Context
* **Decision:** Use **React Context API** for Authentication and Session state.
* **Context:** The application requires global access to the authenticated user's profile and the security token.
* **Rationale:**
    * **Efficiency:** Authentication state updates are low-frequency events (Login/Logout).
    * **Simplicity:** Using native Context avoids the boilerplate and bundle size overhead of external libraries.
    * **Dependency Injection:** It provides a clean pattern to inject auth methods (`login`, `logout`) anywhere in the component tree.

## 2. Network Layer: Axios with Interceptors
* **Decision:** Centralized **Axios** instance with Request Interceptors.
* **Context:** Secured endpoints require an `Authorization` header with a valid token.
* **Rationale:**
    * **Decoupling:** Interceptors allow the application to inject the token automatically just before the request leaves the browser.
    * **Error Handling:** Provides a single point of entry to handle global network errors (e.g., redirecting to login on a `401 Unauthorized` response).

## 3. Folder Structure: Feature-Based (Domain Driven)
* **Decision:** Organize code by **Modules** (`modules/auth`, `modules/users`) rather than by technical role (`components`, `pages`).
* **Context:** The application needs a structure that supports growth and new features.
* **Rationale:**
    * **Colocation:** Related code (hooks, types, views, styles) lives together.
    * **Scalability:** Adding a new feature does not require touching unrelated parts of the codebase. It clearly separates "Infrastructure" (`core`) from "Business Logic" (`modules`).

## 4. Styling Strategy: Hybrid Approach
* **Decision:** **TailwindCSS** + **CSS Modules**.
* **Rationale:**
    * **TailwindCSS:** Used for layout, spacing, and typography to accelerate development speed and maintain consistency.
    * **CSS Modules:** Used for complex components that require strict style isolation or specific custom animations, preventing global namespace pollution.
