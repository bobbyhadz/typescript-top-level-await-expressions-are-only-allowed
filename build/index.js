// Top-level await expressions are only allowed when the module option is set to es2022
// // EXAMPLE 1 - Using the `await` keyword inside of an `async` function
// async function example() {
//   const result = await Promise.resolve(42);
//   console.log(result); // 👉️ 42
//   // 👉️ result is available here
// }
// example();
// ---------------------------------------------------
// EXAMPLE 2
const result = await Promise.resolve(42);
console.log(result);
export {};
// ---------------------------------------------------
// EXAMPLE 3
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsdUZBQXVGO0FBRXZGLHlFQUF5RTtBQUV6RSw2QkFBNkI7QUFDN0IsOENBQThDO0FBQzlDLG1DQUFtQztBQUNuQyxvQ0FBb0M7QUFDcEMsSUFBSTtBQUVKLGFBQWE7QUFFYixzREFBc0Q7QUFFdEQsWUFBWTtBQUVaLE1BQU0sTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUlwQixzREFBc0Q7QUFFdEQsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gVG9wLWxldmVsIGF3YWl0IGV4cHJlc3Npb25zIGFyZSBvbmx5IGFsbG93ZWQgd2hlbiB0aGUgbW9kdWxlIG9wdGlvbiBpcyBzZXQgdG8gZXMyMDIyXG5cbi8vIC8vIEVYQU1QTEUgMSAtIFVzaW5nIHRoZSBgYXdhaXRgIGtleXdvcmQgaW5zaWRlIG9mIGFuIGBhc3luY2AgZnVuY3Rpb25cblxuLy8gYXN5bmMgZnVuY3Rpb24gZXhhbXBsZSgpIHtcbi8vICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKDQyKTtcbi8vICAgY29uc29sZS5sb2cocmVzdWx0KTsgLy8g8J+Rie+4jyA0MlxuLy8gICAvLyDwn5GJ77iPIHJlc3VsdCBpcyBhdmFpbGFibGUgaGVyZVxuLy8gfVxuXG4vLyBleGFtcGxlKCk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBFWEFNUExFIDJcblxuY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKDQyKTtcbmNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbmV4cG9ydCB7IH07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBFWEFNUExFIDNcbiJdfQ==