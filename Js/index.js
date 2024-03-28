const baseUrl = "https://localhost:7110/Login/getUsername";

async function getUsername(api_url) {
  try {
    const response = await fetch(api_url,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

    if (!response.ok) {
      throw new Error(`Error fetching username: ${response.statusText}`);
    }

    const data = await response.json(); // Parse JSON response
    console.log("Username:", data.Username);
  } catch (error) {
    console.error("Error:", error);
  }
}

function updateUserDisplay() {
  try {
    const username = getUsername(baseUrl);
    const login = document.getElementById("login");
    const userLogo = document.getElementById("userLogo");

    if (username) {
      localStorage.setItem("username", username);
      login.style.display = "none";
      userLogo.innerHTML = username;
      userLogo.style.display = "block";
    } else {
      login.style.display = "block";
      userLogo.style.display = "none";
    }
  } catch (error) {
    console.error("Error updating user display:", error);
  }
}

updateUserDisplay();

// document.getElementById("logout").addEventListener("click", function () {
//   localStorage.removeItem("username");
//   updateUserDisplay();
// });
