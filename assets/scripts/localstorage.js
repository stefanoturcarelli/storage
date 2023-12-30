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
