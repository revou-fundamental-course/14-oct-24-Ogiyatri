//ini java script pakai prompt
function replaceName() {
    let name = prompt("What is your name?");
    document.getElementById("user").textContent = name;
}

replaceName();

//slide gambar
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}
function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("video-banner");
    if (n > imgList.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = imgList.length }
    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    imgList[slideIndex - 1].style.display = "block";
}
//otomatis nav
setInterval(() => {
    plusDivs(1);
}, 2000);


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
