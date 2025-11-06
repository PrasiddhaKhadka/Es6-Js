# Understanding JavaScript Promises: A Beginner's Guide

## What is a Promise?

A **Promise** is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation. Think of it like a real-life promise: when you promise to do something, you'll either fulfill it or break it in the future.

## The Code Breakdown

```javascript
promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise is resolved!");
    }, 2000);
});
```

### Creating a Promise

- We create a new Promise using `new Promise()`
- It takes a function with two parameters: `resolve` and `reject`
- **resolve**: Call this when the operation succeeds
- **reject**: Call this when the operation fails
- In this example, we use `setTimeout()` to simulate a 2-second delay, then call `resolve()` with a success message

## Handling Promises

```javascript
promise.then((message) => {
    console.log(message);
})
```

### The `.then()` Method

- `.then()` runs when the promise is successfully resolved
- It receives the value passed to `resolve()` (in this case, "Promise is resolved!")
- **Output**: `Promise is resolved!`

## Chaining Promises

```javascript
.then(() => console.log('Promise resolved with message: ' + message))
```

### ⚠️ Important Issue Here!

This second `.then()` has a **bug**: the variable `message` is **not accessible** here because it only exists in the scope of the first `.then()`. This will cause a `ReferenceError`.

**To fix it, you should:**
- Return the message from the first `.then()` or
- Use the message within the same `.then()` block

**Corrected version:**
```javascript
promise.then((message) => {
    console.log(message);
    return message; // Return to pass to next .then()
})
.then((message) => console.log('Promise resolved with message: ' + message))
```

## Error Handling

```javascript
.catch((error) => {
    console.log("Promise rejected with error: " + error);
})
```

### The `.catch()` Method

- `.catch()` handles any errors that occur in the promise chain
- It runs when `reject()` is called or when an error is thrown
- In this example, it won't execute because we only call `resolve()`, never `reject()`

## Key Takeaways

1. **Promises have three states:**
   - **Pending**: Initial state, neither fulfilled nor rejected
   - **Fulfilled**: Operation completed successfully
   - **Rejected**: Operation failed

2. **Promise methods:**
   - `.then()`: Handles success
   - `.catch()`: Handles errors
   - `.finally()`: Runs regardless of success or failure

3. **Promises help avoid "callback hell"** by making asynchronous code easier to read and maintain

## Common Use Cases

- Fetching data from an API
- Reading files
- Database operations
- Any operation that takes time to complete

## Example with Error Handling

```javascript
const promise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    
    setTimeout(() => {
        if (success) {
            resolve("Operation successful!");
        } else {
            reject("Operation failed!");
        }
    }, 2000);
});

promise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log("Error: " + error);
    });
```

## Next Steps

- Learn about `async/await` - a more modern way to work with Promises
- Explore `Promise.all()`, `Promise.race()`, and other Promise methods
- Practice with real API calls using `fetch()`