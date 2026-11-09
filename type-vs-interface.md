# Type Aliases vs Interfaces in TypeScript

## Introduction

Both `type` aliases and `interface` declarations describe the shape of data, so developers often wonder which one to use. They overlap heavily, but they differ in capabilities that matter in real-world projects.

## Key Differences

Interfaces support declaration merging. Declaring the same interface twice combines both declarations into one.

```typescript
interface User { id: number }
interface User { name: string }
```

Type aliases cannot be merged, but they are more expressive. They can name unions, tuples, and primitives.

```typescript
type Status = "active" | "inactive";
type Coordinate = [number, number];
```

## Extending Types

Interfaces extend one another with `extends`, while type aliases compose through intersections.

```typescript
interface Animal { name: string }
interface Dog extends Animal { breed: string }

type Admin = User & { role: string };
```

## When to Choose Which

Choose `interface` for object contracts, public APIs and classes that use `implements`, where extensibility matters. Choose `type` for unions, tuples and advanced constructs such as mapped or conditional types.

## Conclusion

For plain object shapes the two are nearly interchangeable. A practical rule is to default to `interface` for extensible object contracts and switch to `type` whenever you need the flexibility only a type alias provides.