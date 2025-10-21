# TypeScript Project Boilerplate

A minimal TypeScript project setup with service architecture and proper type safety.

## Features

- **TypeScript** with strict configuration
- **Service Pattern** with generic interfaces
- **Constructor-based initialization**
- **Proper type safety** throughout
- **pnpm** package management
- **Development scripts** for build, dev, and start

## Quick Start

```bash
# Install dependencies
pnpm install

# Development mode with hot reload
pnpm run dev

# Build for production
pnpm run build

# Run production build
pnpm run start
```

## Project Structure

```
src/
├── index.ts              # Main entry point
├── types.ts              # Type definitions
└── services/
    ├── index.ts          # Service exports
    ├── example.service.ts
    └── example.service.interface.ts
```

## Service Pattern

Services implement a generic interface with proper typing:

```typescript
const service = new ExampleService();
const result: ServiceResponse = await service.execute();
```

## Scripts

- `dev` - Development with hot reload
- `dev:start` - Run without hot reload
- `build` - Compile TypeScript
- `start` - Run production build
- `clean` - Remove build artifacts
