"use strict";
// Top-level await expressions are only allowed when the module option is set to es2022
Object.defineProperty(exports, "__esModule", { value: true });
// EXAMPLE 1 - Using the `await` keyword inside of an `async` function
// async function example() {
//   const result = await Promise.resolve(42);
//   console.log(result); // 👉️ 42
//   // 👉️ result is available here
// }
// example();
var result = await Promise.resolve(42);
console.log(result);
