// 1. Function Factory: Multiplier
const makeMultiplier = factor => number => number * factor;

// Usage example:
const double = makeMultiplier(2);
const triple = makeMultiplier(3);

// 2. Function Factory: Greeter
const makeGreeter = greeting => name => `${greeting}, ${name}!`;

// Usage example:
const sayHi = makeGreeter("Hi");
const sayHello = makeGreeter("Hello");

// 3. Output to HTML
const outputHTML = `
  <h2>Multiplier Functions</h2>
  <p>double(5): ${double(5)}</p>
  <p>triple(4): ${triple(4)}</p>

  <h2>Greeter Functions</h2>
  <p>sayHi("Mia"): ${sayHi("Mia")}</p>
  <p>sayHello("Liam"): ${sayHello("Liam")}</p>
`;

document.getElementById("output").innerHTML = outputHTML;

// Also log to console
console.log(double(5));       // 10
console.log(triple(4));       // 12
console.log(sayHi("Mia"));    // "Hi, Mia!"
console.log(sayHello("Liam")); // "Hello, Liam!"
