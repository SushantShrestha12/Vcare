login = document.getElementById("login");
userLogo = document.getElementById("userLogo");

if (localStorage.getItem("Name")) {
  login.style.display = "none";

  html = ``;
  // userLogo = document.getElementById("userLogo");
  // userLogo.innerHTML = html;
}
else{
    userLogo.style.display = "none";
}



document.getElementById("logout").addEventListener("click", function () {
  localStorage.removeItem("Name");
  login.style.display = "block";
  userLogo.style.display = "none";
});
