# Problem Solving with TypeScript & OOP

This repository contains my solutions for the B8A1 assignment, which covers the basics of TypeScript (types, optional and rest parameters, readonly tuples, interfaces, type narrowing, generics and promises) and object-oriented programming (classes, inheritance and access modifiers).

## Problem Solving

All eight problems are solved in [solutions.ts](./solutions.ts):

1. `multiplyValue`: multiplies a number by an optional multiplier (defaults to 2).
2. `processInput`: handles a `string | number | boolean` input using `typeof` narrowing.
3. `formatCoordinate`: formats a readonly `[latitude, longitude, locationName]` tuple.
4. `concatenateArrays`: a generic function that merges any number of arrays.
5. `Course` and `getPopularCourses`: filters published courses by a minimum student count.
6. `pluckValues`: a generic function that extracts one property from a list of objects.
7. `Employee` and `Manager`: classes showing inheritance and access modifiers.
8. `validateAgeAsync`: an async age check that resolves or rejects with an `Error`.

## Blog Posts

- [Type Alias vs Interface in TypeScript](./type-vs-interface.md)
- [Access Modifiers in TypeScript](./access-modifiers.md)
