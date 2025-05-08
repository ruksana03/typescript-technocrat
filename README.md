# TypeScript Basics

## 1. Interfaces vs Types in TypeScript

In TypeScript, both `interface` and `type` are powerful tools used to define the shape of data. While they often seem interchangeable, there are subtle differences that can determine which one to use in specific scenarios.

- **Interfaces** are designed to be extendable. You can extend an interface using `extends`, and you can also merge interfaces by declaring them multiple times.
- **Types**, on the other hand, are more **strict** and cannot be merged.

### Example:

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

// Merged: { name: string; age: number; }
