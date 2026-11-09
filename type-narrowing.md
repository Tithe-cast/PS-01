# Mastering Type Narrowing in TypeScript

## Introduction

Union types are powerful, but they come with a limitation: you can only access members that are common to every type in the union. Type narrowing solves this problem. It is the process by which the compiler refines a broad type into a more specific one based on runtime checks, delivering safety without risky type assertions.

## Narrowing Primitives with `typeof`

The `typeof` guard distinguishes primitives such as `string`, `number`, and `boolean`.

```typescript
function formatId(id: string | number): string {
  return typeof id === "string" ? id.trim() : id.toFixed(0);
}
```

## Narrowing Classes with `instanceof`

The `instanceof` operator checks the prototype chain, which makes it ideal for class instances such as errors.

```typescript
function getMessage(error: Error | string): string {
  return error instanceof Error ? error.message : error;
}
```

## Narrowing Objects with `in`

The `in` operator checks whether a property exists on an object, which is ideal for unions of object shapes.

```typescript
type Car = { drive: () => void };
type Boat = { sail: () => void };

function move(vehicle: Car | Boat): void {
  if ("drive" in vehicle) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}
```

## Conclusion

Type narrowing keeps your code both flexible and type-safe. Use `typeof` for primitives, `instanceof` for classes, and `in` for object shapes, and let the compiler eliminate an entire category of runtime errors before your code ever runs.