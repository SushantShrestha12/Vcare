// Function to handle card click event
function onCardClick(card) {
    displayTimeSelectionInterface(card);
}

function displayTimeSelectionInterface(card) {
    // Simulated available times
    let availableTimes = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"];

    // Get the modal
    let modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // Get the time buttons container
    let timeButtons = document.getElementById("timeButtons");

    // Clear previous time buttons
    timeButtons.innerHTML = "";

    // Add available times as buttons
    availableTimes.forEach(time => {
        let timeButton = document.createElement("button");
        timeButton.innerText = time;
        timeButton.onclick = function() {
            // When the user clicks a time button, close the modal and confirm the booking
            modal.style.display = "none";
            onConfirmTimeSelection(time, card);
        };
        timeButtons.appendChild(timeButton);
    });

    // Display the modal
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}


// Add event listener to the card element
let cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", function(){
        onCardClick(this);
    });
});

// Function to handle confirmation of time selection
function onConfirmTimeSelection(selectedTime) {
        displayConfirmationMessage(selectedTime);
        document.body.removeChild(document.querySelector("div"));
}

// Function to display confirmation message
function displayConfirmationMessage(selectedTime) {
    alert("Booking confirmed for " + selectedTime);
}
