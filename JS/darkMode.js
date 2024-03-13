// const settingsIcon = document.getElementById("settingsIcon");
// const dropdownMenu = document.getElementById("dropdownMenu");

// settingsIcon.addEventListener("click", function () {
//   // Toggle the visibility of the dropdown menu
//   if (dropdownMenu.style.display === "block") {
//     dropdownMenu.style.display = "none";
//   } else {
//     dropdownMenu.style.display = "block";
//   }
// });

// // Add event listener to dark mode toggle button
// const darkModeToggleBtn = document.getElementById("darkModeToggleBtn");

// darkModeToggleBtn.addEventListener("click", function () {
//   const body = document.body;

//   // Check if dark mode is enabled or disabled
//   const isDarkMode = localStorage.getItem("darkMode") === "enabled";

//   // Function to enable dark mode
//   function enableDarkMode() {
//     body.classList.add("dark-mode");
//     localStorage.setItem("darkMode", "enabled");
//   }

//   // Function to disable dark mode
//   function disableDarkMode() {
//     body.classList.remove("dark-mode");
//     localStorage.setItem("darkMode", null);
//   }

//   // Toggle dark mode when the button is clicked
//   darkModeToggleBtn.addEventListener("click", () => {
//     if (localStorage.getItem("darkMode") !== "enabled") {
//       enableDarkMode();
//     } else {
//       disableDarkMode();
//     }
//   });

//   // Set initial dark mode state
//   if (isDarkMode) {
//     enableDarkMode();
//   }
// });
