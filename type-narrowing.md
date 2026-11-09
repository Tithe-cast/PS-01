# Mastering Type Narrowing in TypeScript

## Introduction

Union types are powerful, but they restrict you to members shared by every type. Type narrowing solves this problem. The compiler refines a broad type into a specific one using runtime checks. This makes code safer and easier to read.

## Narrowing Primitives with `typeof`

The `typeof` guard distinguishes primitives such as `string` and `number`. Inside each branch, TypeScript knows the exact type. It then allows only valid operations.

```typescript
function formatId(id: string | number): string {
  return typeof id === "string" ? id.trim() : id.toFixed(0);
}
```

Here, `trim()` is safe because `id` is a string in that branch.

## Narrowing Classes with `instanceof`

The `instanceof` operator checks the prototype chain. It suits class instances such as errors. You can separate real `Error` objects from plain values.

```typescript
function getMessage(error: Error | string): string {
  return error instanceof Error ? error.message : error;
}
```

Inside the true branch, the compiler treats `error` as an `Error`. It does not work with primitives or interfaces.

## Narrowing Objects with `in`

The `in` operator checks whether a property exists on an object. It works well for unions of object shapes. A unique property identifies the type.

```typescript
type Car = { drive: () => void };
type Boat = { sail: () => void };

function move(vehicle: Car | Boat): void {
  if ("drive" in vehicle) vehicle.drive();
  else vehicle.sail();
}
```

After the check, calling `vehicle.drive()` is fully type-safe. This pattern is common when handling API responses.

## Conclusion

Type narrowing keeps code flexible and type-safe. Use `typeof` for primitives, `instanceof` for classes and `in` for object shapes. The compiler then removes many runtime errors before execution.