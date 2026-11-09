<div align="center">

# PS-01: Problem Solving with TypeScript & OOP

A collection of strongly typed TypeScript solutions covering core language features, generics, asynchronous programming and object-oriented design.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Strict Typing](https://img.shields.io/badge/Type%20Safety-No%20any-success?style=for-the-badge)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Repository Structure](#repository-structure)
- [Solutions](#solutions)
- [Code Quality Standards](#code-quality-standards)
- [Technical Blog Posts](#technical-blog-posts)
- [Getting Started](#getting-started)
- [Author](#author)

---

## Repository Structure

```
PS-01/
├── solutions.ts           
├── type-vs-interface.md   
├── type-narrowing.md      
└── README.md              
```

## Solutions

All solutions are implemented in a single file, [`solutions.ts`](./solutions.ts).

| # | Implementation | Key Concepts |
|:-:|----------------|--------------|
| 1 | `multiplyValue` | Optional parameters, nullish coalescing (`??`) to handle `0` correctly |
| 2 | `processInput` | Union types, `typeof` narrowing |
| 3 | `formatCoordinate` | `readonly` tuples, destructuring, template literals |
| 4 | `concatenateArrays` | Generic type parameters, rest parameters |
| 5 | `Course`, `getPopularCourses` | Interfaces, non-mutating array filtering |
| 6 | `pluckValues` | Generics with `K extends keyof T`, indexed access types |
| 7 | `Employee`, `Manager` | Inheritance, `protected` and `private` access modifiers |
| 8 | `validateAgeAsync` | `async` functions, `Promise<string>`, `setTimeout`, error handling |

## Code Quality Standards

- **Explicit typing:** every function, method, and callback declares its parameter and return types
- **No `any`:** type safety is preserved throughout
- **Exact naming:** all functions, interfaces, and classes match the specification
- **Exact output:** return values match the required formats precisely
- **Clean source:** no inline problem labels, `console.log` statements, or sample test calls in `solutions.ts`

## Technical Blog Posts

| Post | Summary |
|------|---------|
| [Type Aliases vs Interfaces](./type-vs-interface.md) | Core differences between `type` and `interface`, and guidance on when to choose each |
| [Type Narrowing](./type-narrowing.md) | Refining types with `typeof`, `instanceof`, and the `in` operator |

