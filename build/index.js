// Top-level await expressions are only allowed when the module option is set to es2022
// EXAMPLE 1 - Using the `await` keyword inside of an `async` function
async function example() {
    const result = await Promise.resolve(42);
    console.log(result); // 👉️ 42
    // 👉️ result is available here
}
example();
export {};
// -------------------------------------------------
// // Example 2 - Using top-level await
// const result = await Promise.resolve(42);
// console.log(result);
// export { };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsdUZBQXVGO0FBRXZGLHNFQUFzRTtBQUV0RSxLQUFLLFVBQVUsT0FBTztJQUNwQixNQUFNLE1BQU0sR0FBRyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVM7SUFDOUIsK0JBQStCO0FBQ2pDLENBQUM7QUFFRCxPQUFPLEVBQUUsQ0FBQzs7QUFJVixvREFBb0Q7QUFFcEQsdUNBQXVDO0FBRXZDLDRDQUE0QztBQUM1Qyx1QkFBdUI7QUFFdkIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gVG9wLWxldmVsIGF3YWl0IGV4cHJlc3Npb25zIGFyZSBvbmx5IGFsbG93ZWQgd2hlbiB0aGUgbW9kdWxlIG9wdGlvbiBpcyBzZXQgdG8gZXMyMDIyXG5cbi8vIEVYQU1QTEUgMSAtIFVzaW5nIHRoZSBgYXdhaXRgIGtleXdvcmQgaW5zaWRlIG9mIGFuIGBhc3luY2AgZnVuY3Rpb25cblxuYXN5bmMgZnVuY3Rpb24gZXhhbXBsZSgpIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKDQyKTtcbiAgY29uc29sZS5sb2cocmVzdWx0KTsgLy8g8J+Rie+4jyA0MlxuICAvLyDwn5GJ77iPIHJlc3VsdCBpcyBhdmFpbGFibGUgaGVyZVxufVxuXG5leGFtcGxlKCk7XG5cbmV4cG9ydCB7IH1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyAvLyBFeGFtcGxlIDIgLSBVc2luZyB0b3AtbGV2ZWwgYXdhaXRcblxuLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKDQyKTtcbi8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbi8vIGV4cG9ydCB7IH07Il19