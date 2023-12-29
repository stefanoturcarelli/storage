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
