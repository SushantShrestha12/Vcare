const femaleImage = document.getElementById("female-image");
const maleImage = document.getElementById("male-image");
const femaleColumn = document.getElementById("female-container");
const maleColumn = document.getElementById("male-container");
const femaleLabel = document.getElementById("female-label"); // Change variable name
const maleLabel = document.getElementById("male-label"); // Change variable name


function handleSelection(gender) {
    if (gender === "female") {
        // Set female image style
        femaleImage.style.transform = "scale(1.1)"; // Make it bigger
        femaleImage.style.opacity = "1"; // Increase opacity
        femaleColumn.style.transform = "translateX(0)"; // Reset female column position

        // Reset male image style and position
        maleImage.style.transform = "scale(1)"; // Reset size
        maleImage.style.opacity = "0.6"; // Decrease opacity
        maleColumn.style.transform = "translateX(250px)"; // Move male column to the right
        femaleLabel.style.display = "none";
        maleLabel.style.display = "none"; // Make sure to show male label
    } else if (gender === "male") {
        // Set male image style
        maleImage.style.transform = "scale(1.1)"; // Make it bigger
        maleImage.style.opacity = "1"; // Increase opacity
        maleColumn.style.transform = "translateX(0)"; // Reset male column position

        // Reset female image style and position
        femaleImage.style.transform = "scale(1)"; // Reset size
        femaleImage.style.opacity = "0.6"; // Decrease opacity
        femaleColumn.style.transform = "translateX(-300px)"; // Move female column to the left
        maleLabel.style.display = "none";
        femaleLabel.style.display = "none"; // Make sure to show female label
    }
}


femaleImage.addEventListener("click", function() {
    handleSelection("female");
    handleGenderSelection("female");
});

maleImage.addEventListener("click", function() {
    handleSelection("male");
    handleGenderSelection("male");
});

function handleGenderSelection(gender) {
    if (gender === "female") {
        document.getElementById("female-data-fill").style.display = "block"; 
        document.getElementById("male-data-fill").style.display = "none"; 
    } else if (gender === "male") {
        document.getElementById("male-data-fill").style.display = "block"; 
        document.getElementById("female-data-fill").style.display = "none"; 
    }
}




window.onload = () => {
    const femaleWeightInput = document.getElementById("female-weight");
    const femaleHeightInput = document.getElementById("female-height");
    const maleWeightInput = document.getElementById("male-weight");
    const maleHeightInput = document.getElementById("male-height");
    const calculateFemaleButton = document.getElementById("female-calculate-bmi");
    const calculateMaleButton = document.getElementById("male-calculate-bmi");
    const femaleResultContainer = document.getElementById("female-bmi-result");
    const maleResultContainer = document.getElementById("male-bmi-result");
    const bmiPointer = document.getElementById("pointer");
    const spinner = document.getElementById("spinner");

    calculateFemaleButton.addEventListener("click", calculateFemaleBMI);
    calculateMaleButton.addEventListener("click", calculateMaleBMI);

    function calculateFemaleBMI() {
        const weight = parseFloat(femaleWeightInput.value);
        const height = parseFloat(femaleHeightInput.value);

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            displayResult(femaleResultContainer, "Invalid input.");
            return null;
        }

        const bmi = weight / ((height / 100) ** 2);
        const status = determineStatus(bmi);
        displayResult(femaleResultContainer, bmi.toFixed(2), status);
        adjustPointer(bmi);
    }

    function calculateMaleBMI() {
        const weight = parseFloat(maleWeightInput.value);
        const height = parseFloat(maleHeightInput.value);

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            displayResult(maleResultContainer, "Invalid input.");
            return null;
        }

        const bmi = weight / ((height / 100) ** 2);
        const status = determineStatus(bmi);
        displayResult(maleResultContainer, bmi.toFixed(2), status);
        adjustPointer(bmi);
    }

    function displayResult(container, bmi, status) {
        const valueElement = container.querySelector(".value");
        const smallTextElement = container.querySelector(".small-text");
        const bmiMeterValue = container.parentElement.querySelector(".value");
        const bmiMeterStatus = container.parentElement.querySelector(".small-text");

        if (valueElement && smallTextElement && bmiMeterValue && bmiMeterStatus) {
            valueElement.textContent = `BMI: ${bmi}`;
            smallTextElement.textContent = `Status: ${status}`;
            bmiMeterValue.textContent = `BMI: ${bmi}`;
            bmiMeterStatus.textContent = `Status: ${status}`;
            container.style.display = "block";
        } else {
            console.error("Elements not found in the container:", container);
        }
    }

    function determineStatus(bmi) {
        if (bmi < 18.5) {
            return "Underweight";
        } else if (bmi < 25) {
            return "Normal weight";
        } else if (bmi < 30) {
            return "Overweight";
        } else {
            return "Obesity";
        }
    }


    function calculateAngle(bmi) {
        return (bmi - 16) * (180 / (60 - 16)); // Mapping BMI range to angle range
    }
    
    function adjustPointer(bmi) {
        const angle = calculateAngle(bmi);
        bmiPointer.style.transform = `rotate(${angle}deg)`;
    }

    function adjustSpinnerRotation(angle) {
        const spinner = document.getElementById("spinner");
        spinner.style.transform = `rotate(${angle}deg)`;
    }
    function adjustPointerAndSpinner(bmi) {
        const angle = calculateAngle(bmi);
        adjustPointer(angle);
        adjustSpinnerRotation(angle);
    }


};

function displayResult(container, bmi, status) {
    const valueElement = container.querySelector(".value");
    const smallTextElement = container.querySelector(".small-text");

    if (valueElement && smallTextElement) {
        // Update the BMI and status text inside the BMI meter
        valueElement.textContent = `BMI: ${bmi.toFixed(2)}`;
        smallTextElement.textContent = `Status: ${status}`;

        // Ensure default BMI and status text are visible
        valueElement.style.display = "block";
        smallTextElement.style.display = "block";

        // Update the pointer position
        adjustPointer(bmi);
    } else {
        console.error("Elements not found in the container:", container);
    }
}







// Add event listener to the document body to detect clicks outside of FAQ questions
document.body.addEventListener('click', function(event) {
    const isClickInsideFAQ = event.target.closest('.FAQ');
    if (!isClickInsideFAQ) {
        hideAllAnswers(); // Hide all answers if the click is outside the FAQ
    }
});

// Function to hide all answers
function hideAllAnswers() {
    let answers = document.querySelectorAll('.faq-answer');
    answers.forEach(answer => {
        answer.style.display = 'none';
    });
}

// Function to toggle answer visibility
function toggleAnswer(answerNumber) {
    hideAllAnswers(); // Hide all answers before showing the selected one

    let answer = document.getElementById('answer' + answerNumber);
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block'; // Toggle display
}

function expandQuestion(question) {
    question.style.fontSize = '16px'; // Increase font size on hover
}

function shrinkQuestion(question) {
    question.style.fontSize = '15px'; // Restore font size on mouseout
}

