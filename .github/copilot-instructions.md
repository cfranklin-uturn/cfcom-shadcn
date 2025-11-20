# AI Coding Agent Instructions - CFCOM

## Architecture Overview

This is a **Next.js 16 (App Router) dashboard application** with a sophisticated component library built on shadcn/ui and Radix primitives. The app is going to become a personal portfolio website for it's author. It is currently in the very early stages. It is based on a dashboard provided by Shadcn.

**Key architectural layers:**
- **App Router**: Uses Next.js App Router with `app/` directory structure
- **Component Library**: shadcn/ui components in `components/ui/` with custom business components in `components/`
- **State Management**: React state with @dnd-kit for drag operations, @tanstack/react-table for data tables
- **Styling**: TailwindCSS with CSS variables for theming, dark mode forced in layout
- **Data Flow**: Static JSON data (`app/data.json`) → components → interactive table with local state

## Critical Patterns & Conventions

### Component Architecture
- **UI Components**: All base components use `data-slot` attributes for styling hooks (see `components/ui/button.tsx`)
- **Forwarding Pattern**: Components use `React.forwardRef` and spread props with `...props`
- **Variant System**: Uses `class-variance-authority` (CVA) for component variants with TypeScript safety
- **Compound Components**: Complex components like sidebar use composition (NavMain, NavDocuments, etc.)

### Import Conventions
```tsx
// Path aliases from tsconfig.json - always use these:
import { Component } from "@/components/ui/component"
import { utils } from "@/lib/utils" 
import { hook } from "@/hooks/hook-name"
```

### Styling Patterns
- **CSS Utility Function**: Always use `cn()` from `@/lib/utils` for conditional classes
- **Responsive Design**: Uses container queries (`@container/main`) alongside Tailwind breakpoints
- **Theme Variables**: Components reference CSS custom properties for colors (e.g., `var(--primary)`)
- **Dark Mode**: Forced dark mode in root layout - all components should work in dark theme

### Data & State Management
- **Table Data**: Use Zod schemas for type safety (see `components/data-table.tsx` schema)
- **Drag & Drop**: Implements @dnd-kit with `SortableContext` and custom drag handles
- **Form Handling**: Inline editing with uncontrolled inputs, toast notifications with `sonner`
- **Responsive UX**: Drawer components adapt to mobile with `useIsMobile` hook

## Development Workflow

### Scripts Available
```bash
npm run dev    # Next.js development server
npm run build  # Production build
npm run start  # Production server
npm run lint   # ESLint
```

### Adding New Components
1. **shadcn/ui components**: Use `npx shadcn add [component]` to maintain consistency
2. **Business components**: Place in `components/` directory, follow existing naming (kebab-case)
3. **UI utilities**: Extend existing patterns in `components/ui/`

### Key Dependencies to Understand
- **@radix-ui/***: Accessibility-first primitives - don't recreate these
- **@tabler/icons-react**: Icon library of choice - use these over other icon libraries
- **@dnd-kit**: Complex drag-and-drop - follow existing `data-table.tsx` patterns
- **recharts**: Charting library used in drawer views
- **vaul**: Drawer component library for mobile-first design

## Integration Points

### Data Structure
The app expects data arrays with this structure (from `app/data.json`):
```typescript
{
  id: number,
  header: string, 
  type: string,
  status: string,
  target: string,
  limit: string,
  reviewer: string
}
```

### Component Communication
- **Sidebar ↔ Main**: Uses shadcn `SidebarProvider` context for responsive behavior
- **Table ↔ Drawer**: Row items open detailed views via `DrawerTrigger` pattern
- **Mobile Detection**: `useIsMobile` hook determines layout rendering (drawer vs modal)

## Common Pitfalls to Avoid

- **Don't import React**: Next.js 16 with new JSX transform - omit React imports
- **Don't bypass path aliases**: Always use `@/` imports, never relative paths for shared code
- **Don't ignore container queries**: Layout uses `@container/main` for responsive design
- **Don't create custom icons**: Use @tabler/icons-react for consistency
- **Don't forget drag handles**: Table rows need `DragHandle` component for reordering
- **Don't hardcode breakpoints**: Use existing Tailwind classes and `useIsMobile` hook

## File Organization

```
app/                    # Next.js App Router pages
├── layout.tsx         # Root layout with font setup, dark mode
├── page.tsx           # Main dashboard page
└── data.json          # Static data source

components/            # Business logic components  
├── app-sidebar.tsx    # Main navigation sidebar
├── data-table.tsx     # Complex table with drag & drop
├── chart-area-interactive.tsx
└── ui/                # shadcn/ui base components
    ├── button.tsx     # Example of CVA pattern
    └── sidebar.tsx    # Compound component system

lib/utils.ts           # Essential utilities (cn function)
hooks/use-mobile.ts    # Responsive behavior hook
```

When working on this codebase, prioritize maintaining the established patterns for component composition, responsive design, and accessibility features built into the Radix primitives.