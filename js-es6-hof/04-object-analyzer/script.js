// Starter data
const settings = {
  darkMode: true,
  notifications: false,
  autoSave: true,
  spellCheck: false,
  grammarCheck: true
};

// 1. Convert to array of [key, value] pairs
const entries = Object.entries(settings);

// 2. Filter only settings set to true
const enabledEntries = entries.filter(([key, value]) => value === true);

// 3. List enabled settings as "darkMode: true"
const enabledList = enabledEntries.map(([key, value]) => `${key}: ${value}`);

// 4. Count how many are true
const trueCount = enabledEntries.length;

// 5. Rebuild the filtered settings object
const enabledSettings = Object.fromEntries(enabledEntries);

// 6. Output everything to HTML
const output = `
  <h2>Enabled Settings</h2>
  <ul>
    ${enabledList.map(item => `<li>${item}</li>`).join("")}
  </ul>

  <p><strong>Total Enabled Settings:</strong> ${trueCount}</p>

  <h2>Rebuilt Enabled Settings Object</h2>
  <pre>${JSON.stringify(enabledSettings, null, 2)}</pre>
`;

document.getElementById("output").innerHTML = output;
