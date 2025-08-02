// Starter data
const cart = [
  { name: "Pen", price: 20, quantity: 3 },
  { name: "Notebook", price: 50, quantity: 2 },
  { name: "Pencil", price: 10, quantity: 5 }
];

// 1. Calculate total price for each item
const itemTotals = cart.map(item => ({
  ...item,
  total: item.price * item.quantity
}));

// 2. Generate a new array of item descriptions (e.g., "Pen - ₱20")
const descriptions = cart.map(({ name, price }) => `${name} - ₱${price}`);

// 3. Compute the total cart value using reduce()
const totalCartValue = itemTotals.reduce((sum, { total }) => sum + total, 0);

// 4. Create HTML output using template literals
const outputHTML = `
  <h2>Item Descriptions</h2>
  <ul>
    ${descriptions.map(desc => `<li>${desc}</li>`).join("")}
  </ul>

  <h2>Item Totals</h2>
  <ul>
    ${itemTotals.map(({ name, price, quantity, total }) => 
      `<li>${name} - ₱${price} × ${quantity} = ₱${total}</li>`
    ).join("")}
  </ul>

  <h2>Total Cart Value</h2>
  <p><strong>₱${totalCartValue}</strong></p>
`;

// 5. Inject the output into the HTML
document.getElementById("output").innerHTML = outputHTML;
