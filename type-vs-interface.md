# Type Aliases vs Interfaces in TypeScript

## Introduction

Both `type` aliases and `interface` declarations describe the shape of data. Developers often wonder which one to use. They overlap heavily but differ in important ways. Choosing well improves readability and maintainability.

## Key Differences

Interfaces support declaration merging. Declaring the same interface twice combines both declarations. This helps when extending library types.

```typescript
interface User { id: number }
interface User { name: string }
```

Type aliases cannot merge, but they are more expressive. They can name unions, tuples and primitives. Declaring the same type alias twice causes an error.

```typescript
type Status = "active" | "inactive";
type Point = [number, number];
```

## Extending Types

Interfaces extend one another with `extends`. Type aliases compose through intersections. Both produce a new type containing every parent property.

```typescript
interface Dog extends User { breed: string }
type Admin = User & { role: string };
```

Intersections can also combine several types at once.

## When to Choose Which

Choose `interface` for object contracts and public APIs. It also suits classes that use `implements`. Choose `type` for unions and tuples. It also handles mapped and conditional types. Teams often pick one convention for consistency.

## Conclusion

For plain object shapes, the two are nearly interchangeable. Default to `interface` for extensible object contracts. Switch to `type` when you need its extra flexibility. Consistency across a codebase matters more than the choice itself.