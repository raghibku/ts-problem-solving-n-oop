# Type Alias vs Interface in TypeScript

In TypeScript, both `type` aliases and `interface`s can describe the shape of an object. For everyday object types they behave almost the same, but a few real differences decide which one fits better in a given situation.

A **type alias** gives a name to any type. It isn't limited to objects. It can name primitives, unions, tuples, and even mapped or conditional types.

An **interface** describes the shape of an object. It is the usual way to define a contract that a class can implement.

Two key differences:

1. **Declaration merging:** declaring the same interface twice merges the two declarations. Declaring the same type alias twice is an error.
2. **Flexibility:** unions, primitives and tuples can only be written with `type`.

**Describing an object (both work):**

```ts
type UserType = { name: string; age: number };

interface UserInterface {
  name: string;
  age: number;
}
```

**Interface with a class:**

```ts
interface Animal {
  name: string;
  speak(): void;
}

class Dog implements Animal {
  name = "Rex";
  speak() {
    console.log("Woof!");
  }
}
```

**Declaration merging (interface only):**

```ts
interface Car {
  brand: string;
}
interface Car {
  year: number;
}

const car: Car = { brand: "Toyota", year: 2024 }; // the two Car declarations got merged, so both fields are needed

type Bike = { brand: string };
// type Bike = { year: number }; // this fails, TypeScript complains about a duplicate identifier 'Bike'
```

**Things only `type` can do:**

```ts
type Id = string | number;           // an id could be either one
type Point = [number, number];       // just an x and y pair
type Status = "active" | "inactive"; // only these two exact strings are allowed
type ReadonlyUser = { readonly [K in keyof UserType]: UserType[K] }; // same as UserType but every field is locked
```

Use `interface` for object shapes and classes. It extends cleanly and usually gives clearer error messages. Use `type` when you need unions, tuples, primitives or advanced types. In short: **interface for objects, type for everything else.**
