document
  .getElementById("loginBtn")
  .addEventListener("click", async function name(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const login = {
        email: email,
        password: password
    };

    try {
      const baseUrl = "https://localhost:7110/Login";
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });

      if (response.ok) {
        window.location.href = "/HTML/index.html";
        alert("Logged in successfully!");
        localStorage.setItem("Name", "Sushant");
      }
      else{
        alert("Invalid username or password.");
      }
    } catch (error) {
      console.log(error);
    }
  });
