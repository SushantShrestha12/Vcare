document.addEventListener("DOMContentLoaded", function () {
  const femaleImage = document.getElementById("female-image");
  const maleImage = document.getElementById("male-image");
  const femaleColumn = document.getElementById("female-container");
  const maleColumn = document.getElementById("male-container");
  const femaleLabel = document.getElementById("female-label");
  const maleLabel = document.getElementById("male-label");

  function handleSelection(gender) {
    if (gender === "female") {
      // Set female image style
      femaleImage.style.transform = "scale(1.1)"; // Make it bigger
      femaleImage.style.opacity = "1"; // Increase opacity
      femaleColumn.style.transform = "translateX(170px)"; // Reset female column position

      // Reset male image style and position
      maleImage.style.transform = "scale(1)"; // Reset size
      maleImage.style.opacity = "0.4"; // Decrease opacity
      maleColumn.style.transform = "translateX(300px)"; // Move male column to the right
      femaleLabel.style.display = "none";
      maleLabel.style.display = "none"; // Make sure to show male label
    } else if (gender === "male") {
      // Set male image style
      maleImage.style.transform = "scale(1.1)"; // Make it bigger
      maleImage.style.opacity = "1"; // Increase opacity
      maleColumn.style.transform = "translateX(-180px)"; // Reset male column position

      // Reset female image style and position
      femaleImage.style.transform = "scale(1)"; // Reset size
      femaleImage.style.opacity = "0.4"; // Decrease opacity
      femaleColumn.style.transform = "translateX(-300px)"; // Move female column to the left
      maleLabel.style.display = "none";
      femaleLabel.style.display = "none"; // Make sure to show female label
    }
  }

  function handleGenderSelection(gender) {
    if (gender === "female") {
      document.getElementById("female-data-fill").style.display = "block";
      document.getElementById("male-data-fill").style.display = "none";
    } else if (gender === "male") {
      document.getElementById("male-data-fill").style.display = "block";
      document.getElementById("female-data-fill").style.display = "none";
    }
  }

  function displayInvalidInputMessage(gender) {
    const resultContainer = document.getElementById(gender + "-bmi-result");
    if (resultContainer) {
      resultContainer.innerHTML =
        "<p>Invalid input. Please enter valid weight and height.</p>";
      setTimeout(function () {
        resultContainer.innerHTML = ""; // Clear the invalid message after 5 seconds
      }, 5000);
    }
  }

  function calculateBMI(gender) {
    const weightInput = document.getElementById(gender + "-weight");
    const heightInput = document.getElementById(gender + "-height");
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // Convert height from cm to meters

    if (isNaN(weight) || isNaN(height)) {
      // Display invalid input message for non-numeric inputs
      displayInvalidInputMessage(
        gender,
        "Please enter valid weight and height."
      );
      return null; // Return null to indicate invalid input
    }

    if (weight === 0 || height === 0) {
      // Display invalid input message for zero values
      displayInvalidInputMessage(
        gender,
        "Please enter valid weight and height."
      );
      return null; // Return null to indicate invalid input
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    displayBMIResult(gender, bmi.toFixed(2)); // Display BMI result
    return bmi.toFixed(2); // Return BMI rounded to 2 decimal places
  }

  function displayBMIResult(gender, bmi) {
    const resultContainer = document.getElementById(gender + "-bmi-result");
    let resultText = "";

    if (isNaN(bmi) || bmi === 0) {
      displayInvalidInputMessage(gender);
    } else {
      resultText = "<p>Your BMI is: " + bmi + "</p>";
      if (bmi < 18.5) {
        resultText += "<p>You are underweight.</p>";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText += "<p>Congratulations! You have a healthy weight.</p>";
      } else if (bmi >= 24.9 && bmi < 29.9) {
        resultText += "<p>You are overweight.</p>";
      } else {
        resultText += "<p>You are obese.</p>";
      }
    }

    resultContainer.innerHTML = resultText;
    resultContainer.style.textAlign = "center"; // Center align the text
  }

  // Add click event listener to calculate BMI button for female
  document
    .getElementById("female-calculate-bmi")
    .addEventListener("click", function () {
      const bmi = calculateBMI("female");
      if (bmi !== null) {
        // Check if BMI calculation is successful
        displayBMIResult("female", bmi);
        document.getElementById("female-bmi-result").style.display = "block"; // Show female result container
      }
    });

  // Add click event listener to calculate BMI button for male
  document
    .getElementById("male-calculate-bmi")
    .addEventListener("click", function () {
      const bmi = calculateBMI("male");
      if (bmi !== null) {
        // Check if BMI calculation is successful
        displayBMIResult("male", bmi);
        document.getElementById("male-bmi-result").style.display = "block"; // Show male result container
      }
    });

  // Event listeners for clicking on female and male images
  femaleImage.addEventListener("click", function () {
    handleSelection("female");
    handleGenderSelection("female");
  });

  maleImage.addEventListener("click", function () {
    handleSelection("male");
    handleGenderSelection("male");
  });
});
