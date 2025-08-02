# Function Factory

## Tasks
1. Create a function `makeMultiplier(factor)` that returns another function to multiply a number by `factor`.
    ```js
    const double = makeMultiplier(2);
    console.log(double(5)); // 10
    ```
2. Create `makeGreeter(greeting)` that returns a personalized greeting function:
    ```js
    const sayHi = makeGreeter("Hi");
    console.log(sayHi("Mia")); // "Hi, Mia!"
    ```
