//ini java script pakai prompt
function replaceName() {
    let name = prompt("What is your name?");
    document.getElementById("user").textContent = name;
}

replaceName();

// Get form and display elements
const form = document.getElementById('message-form');
const displayName = document.getElementById('displayName');
const displayBirthdate = document.getElementById('displayBirthdate');
const displayGender = document.getElementById('displayGender');
const displayMessage = document.getElementById('displayMessage');
const currentTime = document.getElementById('currentTime');

// Function to update the current time every second
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    currentTime.textContent = timeString;
}

// Call updateTime every second to display current time
setInterval(updateTime, 1000);

// Handle form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the form data
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    // Display the data on the right side
    displayName.textContent = name;
    displayBirthdate.textContent = birthdate;
    displayGender.textContent = gender;
    displayMessage.textContent = message;
});
