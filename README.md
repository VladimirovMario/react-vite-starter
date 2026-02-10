# React + Vite Starter Template

A **personal, minimal starting template** for building React applications with modern tooling.
This repository is designed as a **convenient baseline**, not a framework and not a full production setup out of the box.

---

## Assumptions & Scope

**Assumptions (explicit):**

- You are already familiar with React fundamentals (hooks, components, JSX).
- You want a clean starting point with routing and sensible defaults.
- You are comfortable extending configuration as your project grows.

**Non-goals:**

- This is not a React framework replacement.
- This is not intended as a beginner tutorial.
- This is not fully production-ready without further hardening.

**Future Evolution:**
Some implementation details are intentionally simple and expected to evolve as the project grows, including the addition of testing cases and improved data-fetching patterns.

---

## What This Template Gives You

- React **19**
- Vite **7** for fast dev server and builds
- React Router **7** preconfigured
- Minimal, readable project structure
- CSS reset included
- Clear extension points for:
  - Adding new Home page sections
  - Adding additional routed pages

- ESLint **9 (flat config)** already wired

Everything is set up so you can **start building immediately** without spending time on initial configuration.

---

## Installation

```bash
git clone <your-repo-url>
cd <project-folder>
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Dependencies

### Runtime

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router": "^7.13.0"
}
```

### Development

```json
{
  "@eslint/js": "^9.39.1",
  "@types/react": "^19.2.5",
  "@types/react-dom": "^19.2.3",
  "@vitejs/plugin-react": "^5.1.1",
  "eslint": "^9.39.1",
  "eslint-plugin-react-hooks": "^7.0.1",
  "eslint-plugin-react-refresh": "^0.4.24",
  "globals": "^16.5.0",
  "vite": "^7.2.4"
}
```

---

## Project Structure

The file structure is intentionally **minimal** and meant to be understood at a glance.
No heavy abstractions, no unnecessary layers.

If you follow the existing patterns, adding new sections or pages should feel straightforward and predictable.

---

## Production Readiness

This template **can be used in production**, but it is **not production-hardened by default**.

Before production use, you may want to add:

- Environment-based configuration
- Error boundaries
- Data fetching strategy
- Testing setup
- Performance monitoring
- Build-time and runtime optimizations

---

## Who This Is For

- Developers who already understand the React ecosystem
- People who want a repeatable personal starting point
- Anyone who prefers clarity over magic

If you can follow the logic, expanding this project should feel _easy and natural_.

---

## Limitations & Risks

- No batteries-included production tooling
- Assumes familiarity with modern React and tooling
- Architectural decisions are intentionally light

This is by design.

---

## Implementation Notes

- **ESLint flat config**: Explicit, modern, and predictable linting setup.
- **Inline styles for fallback components**: Ensures zero import latency for loading screens.
- **Artificial fetch delay**: Used to visualize loading states during learning.
- **Expandable structure**: Minimal but designed to allow adding Home page sections and additional routes easily.

---

## Final Note

Think of this as a **clean desk**, not a furnished office.
You bring what you need, when you need it.
