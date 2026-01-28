# GitHub Copilot Instructions

## Project Context

This is a Next.js 16 starter kit with TypeScript, Tailwind CSS v4, and shadcn/ui.

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router), React 19
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS v4 (OKLCH colors)
- **UI**: shadcn/ui (New York style), Radix UI
- **Icons**: lucide-react
- **Theme**: next-themes

## Code Style

### Imports

Use path aliases:
```tsx
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Feature } from "@/types"
```

### Components

1. UI components use CVA pattern:
```tsx
const variants = cva("base", { variants: {...} })
const Component = React.forwardRef(...)
```

2. Always use `cn()` for className merging
3. Default to Server Components, add `"use client"` only when needed

### Naming

- Files: `kebab-case.tsx`
- Components: `PascalCase`
- Hooks: `useCamelCase`
- Types: `PascalCase`

## Directory Structure

- `src/components/ui/` - shadcn/ui components
- `src/components/layout/` - Header, Footer, Navigation
- `src/features/[name]/` - Feature modules with components/ and config/
- `src/lib/` - Utilities and constants
- `src/types/` - Shared TypeScript types
- `src/hooks/` - Custom hooks

## Commit Format

Use emoji conventional commits:
- ✨ feat: New feature
- 🐛 fix: Bug fix
- 📝 docs: Documentation
- ♻️ refactor: Refactoring
