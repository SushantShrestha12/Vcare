let timeButtons = document.getElementById("timeButtons");

function onCardClick(card) {
  displayTimeSelectionInterface(card);
}

function displayTimeSelectionInterface(card) {
  let availableTimes = [
    "10:00:00",
    "11:00:00",
    "12:00:00",
    "1:00:00",
    "2:00:00",
  ];
  let modal = document.getElementById("myModal");
  let span = document.getElementsByClassName("close")[0];
  timeButtons.innerHTML = "";

  availableTimes.forEach((time) => {
    let timeButton = document.createElement("button");
    timeButton.setAttribute("id", "timeBtn");
    timeButton.innerText = time;
    timeButton.onclick = async function () {
      modal.style.display = "none";
      if (true) {
        var username = localStorage.getItem("Name");
        var doctorName = document.querySelector(".card-title");
        var time = document.getElementById("timeBtn");

        const doctorAppointment = {
          username: username,
          doctorName: doctorName,
          time: time,
        };

        try {
          const baseUrl = "https://localhost:7110/DoctorAppointment";
          const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(doctorAppointment),
          });

          if (response.ok) {
            alert("Successfully created. Please login to continue.");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        window.alert("Please login first!");
        return;
      }
      onConfirmTimeSelection(time, card);
    };
    timeButtons.appendChild(timeButton);
  });

  modal.style.display = "block";

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", function () {
    onCardClick(this);
  });
});

function onConfirmTimeSelection(selectedTime) {
  displayConfirmationMessage(selectedTime);
  document.body.removeChild(document.querySelector("div"));
}

function displayConfirmationMessage(selectedTime) {
  alert("Booking confirmed for " + selectedTime);
}

// ---------------------------Doctor Appointment------------------------

// timeButtons.addEventListener("click", async function (event) {
//   event.preventDefault();

//   if (localStorage.getItem("Name")) {
//     var username = localStorage.getItem("Name");
//     var doctorName = document.querySelector(".card-title");
//     var time = document.getElementById("timeBtn");

//     const doctorAppointment = {
//       username: username,
//       doctorName: doctorName,
//       time: time,
//     };

//     try {
//       const baseUrl = "https://localhost:7110/DoctorAppointment";
//       const response = await fetch(baseUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(doctorAppointment),
//       });

//       if (response.ok) {
//         alert("Successfully created. Please login to continue.");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   } else {
//     console.alert("Please login first!");
//     return;
//   }
// });
