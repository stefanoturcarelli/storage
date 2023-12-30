# Storage

---

**Table of contents**

- [`sessionStorage`](#sessionstorage)
  - [Deleting items from `sessionStorage`](#deleting-items-from-sessionstorage)
- [`localStorage`](#localstorage)
- [Cookies vs. `sessionStorage` vs. `localStorage`](#cookies-vs-sessionstorage-vs-localstorage)

---

## sessionStorage

- **`sessionStorage` Overview:**
  - Stores information in the user's browser for a single session (while the browser is open).
  - Data is ephemeral, clearing upon browser closure (If the user closes the browser, the data is gone).
- **Comparison with Cookies:**
  - Larger capacity than cookies (5MB vs 4KB).
  - Not transmitted to the server with every request.
- **Accessing `sessionStorage`:**
  - Part of the `window` object is accessible via `window.sessionStorage` or simply `sessionStorage`.
- **Commonality with `localStorage`:**
  - Both share methods and properties.
  - Both `sessionStorage` and `localStorage` are part of the `window` object.
  - The distinction lies in persistence—`localStorage` survives browser closure, while `sessionStorage` does not.
- **Properties and Methods:**
  1. `length`: This property returns the number of data items stored in the `sessionStorage` object.
  2. `key(index)`: This method returns the name of the nth key in the storage (Retrieves the key at a specified index).
  3. `getItem(keyname)`: This method returns the value of the key provided.
  4. `setItem(keyname, value)`: This method adds that key to the storage or updates that key's value if it already exists (Sets a key-value pair).
  5. `removeItem(keyname)`: This method Removes the item associated with the given key.
  6. `clear()`: This method empties all keys out of the storage.
- **Data Type Considerations:**
  - Both `sessionStorage` and `localStorage` exclusively store strings.
  - Use `JSON.stringify()` and `JSON.parse()` for converting objects to strings and vice versa.
- **Security Note:**
  - Both `sessionStorage` and `localStorage` are not secure; they are accessible by any JavaScript code on the page.
  - Unsuitable for storing sensitive data.

The following JavaScript code is using the sessionStorage object to store and retrieve data within the user's browser session. The data stored in sessionStorage is cleared when the browser tab is closed.

```jsx
"use strict"; // Enforce strict mode in JavaScript

// Set some variables
let username = "@johndoe"; // A username
let city = "New York"; // A City
let isTheUserLoggedIn = true; // A boolean indicating if the user is logged in

// Check if there's any data in sessionStorage and if the user is logged in
if (sessionStorage.length > 0 && sessionStorage.isTheUserLoggedIn) {
  // If so, log a welcome message with the username
  console.log(`Welcome back, ${sessionStorage.username}`);
} else {
  // If not, log a message saying the session has not started
  console.log(`Session not started.`);
}

// Store the username, city, and login status in sessionStorage
sessionStorage.setItem("username", username);
sessionStorage.setItem("city", city);
sessionStorage.setItem("isTheUserLoggedIn", isTheUserLoggedIn);

// Log the entire sessionStorage object to the console
console.log(sessionStorage);

// If uncommented, the following line would clear all data from sessionStorage
// sessionStorage.clear();
```

Here's a step-by-step explanation:

1. `"use strict";` enforces strict mode in JavaScript. This helps catch common coding mistakes and "unsafe" actions.
2. It sets three variables: `username`, `city`, and `isTheUserLoggedIn`.
3. It checks if there is any data in `sessionStorage` and if the user is logged in (`sessionStorage.isTheUserLoggedIn`). If so, it logs a welcome message with the username. If not, it logs a message saying the session has not started.
4. It then stores the `username`, `city`, and `isTheUserLoggedIn` variables in `sessionStorage` using `setItem`.
5. It logs the entire `sessionStorage` object to the console.
6. The last line, `sessionStorage.clear();`, is commented out. If uncommented and run, it would clear all data from `sessionStorage`.

Remember, `sessionStorage` is tab-specific and is cleared when the tab or browser is closed. So, if you close the browser and open it again, the values stored in `sessionStorage` will be gone.

---

### Deleting items from `sessionStorage`

We can delete items from `sessionStorage` using the `removeItem()` method. The method takes a single argument, the key to the item we want to remove.

The following JavaScript code is using the `sessionStorage` object to store, retrieve, and remove data within the user's browser session.

```jsx
"use strict"; // Enforce strict mode in JavaScript

// Set two variables: username and email
let username = "@johndoe";
let email = "johndoe@email.com";

// Store the username and email in sessionStorage
sessionStorage.setItem("username", username);
sessionStorage.setItem("email", email);

// Log the entire sessionStorage object to the console
console.log(sessionStorage);

// The following line is commented out. If uncommented and run, it would remove the email from sessionStorage
// sessionStorage.removeItem("email");

// Check if there's any data in sessionStorage and store the result (a boolean) in isSessionStarted
let isSessionStarted = sessionStorage.length > 0;

// Log a message to the console depending on whether a session has started (i.e., if there's any data in sessionStorage)
console.log(isSessionStarted ? "Session started" : "Session not started");

// Clear all data from sessionStorage
sessionStorage.clear();

// Log another message to the console to show that the session has ended (since sessionStorage has been cleared)
console.log(
  sessionStorage.length > 0 ? "Session started" : "Session not started"
);
```

Here's a step-by-step explanation:

1. `"use strict"` enforces strict mode in JavaScript. This helps catch common coding mistakes and "unsafe" actions.
2. `const display = document.querySelector(".display");` is selecting an HTML element with the class `display`. However, this line of code is not used in the rest of the script.
3. It sets two variables: `username` and `email`.
4. It stores the `username` and `email` variables in `sessionStorage` using `setItem`.
5. It logs the entire `sessionStorage` object to the console.
6. The line `sessionStorage.removeItem("email");` is commented out. If uncommented and run, it would remove the `email` item from `sessionStorage`.
7. It checks if there's any data in `sessionStorage` and stores the result (a boolean) in `isSessionStarted`.
8. It logs a message to the console depending on whether a session has started (i.e., if there's any data in `sessionStorage`).
9. It clears all data from `sessionStorage` using `sessionStorage.clear()`.
10. It logs another message to the console to show that the session has ended (since `sessionStorage` has been cleared).

Remember, `sessionStorage` is tab-specific and is cleared when the tab or browser is closed.

---

## localStorage

- `localStorage` is a type of web storage that allows JavaScript sites and apps to store and access data right in the browser with no expiration date. This means the data stored in the browser will persist even after the browser window is closed.
- The process of storing data in `localStorage` is very similar to `sessionStorage`. The only difference is that `localStorage` persists after the browser is closed.
- The `localStorage` lasts until it is removed by the user or the application that created it.
- You can 'extend' `sessionStorage` to `localStorage` using the 'storage' object.

The following JavaScript code demonstrates how to use the sessionStorage and localStorage objects to store and retrieve data within the user's browser.

```jsx
// Using sessionStorage
sessionStorage.setItem("message", "Merry Christmas!"); // Store a message in sessionStorage
console.log(sessionStorage); // Log the entire sessionStorage object to the console

// Using localStorage
localStorage.setItem("message", "And a Happy New Year!"); // Store a different message in localStorage
console.log(localStorage); // Log the entire localStorage object to the console

// Check if sessionStorage is available
if (sessionStorage) {
  // If sessionStorage is available, store a message with the key "message" and the value "Ho Ho Ho!" in sessionStorage
  sessionStorage.setItem("message", "Ho Ho Ho!");
  console.log(sessionStorage); // Log the entire sessionStorage object to the console
} else {
  // If sessionStorage is not available (i.e., the browser does not support it or it is disabled), store the message in localStorage instead
  localStorage.setItem("message", "Ho Ho Ho!");
  console.log(localStorage); // Log the entire localStorage object to the console
}
```

---

## Cookies vs. `sessionStorage` vs. `localStorage`

Here are the key differences between Cookies, `sessionStorage`, and `localStorage`:

1. **Lifetime:**
   - **Cookies:** Cookies are mainly for reading server-side. We can also access cookies on the client side, but they are deleted once the user closes the browser.
   - **`sessionStorage`:** Clears out once the user closes the browser tab.
   - **`localStorage`:** Persists until explicitly deleted - survives browser restarts.
2. **Storage Limit:**
   - **Cookies:** Can store up to 4KB of data. This might be enough for most requirements, but it's a limitation if you want to store more data.
   - **`sessionStorage` and `localStorage`:** Can store at least 5MB of data (this limit can vary depending on the browser).
3. **Accessibility:**
   - **Cookies:** Can be accessed by both server and client-side.
   - **`sessionStorage` and `localStorage`:** These can only be accessed from the client's side.
4. **Transmission to Server:**
   - **Cookies:** Each time an HTTP request is made to the server, all cookie data is sent to the server.
   - **`sessionStorage` and `localStorage`:** Data stored in them is not sent back to the server with every HTTP request.
5. **Use Cases:**
   - **Cookies:** Typically used for authentication, tracking, and personalization, like user preferences.
   - **`sessionStorage`:** Used for tab-specific data, stateful data, or data that should be deleted when a tab is closed.
   - **`localStorage`:** Used for persistent data that needs to be available across multiple windows or across multiple sessions.
