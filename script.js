// Set the initial date and time to 11:59:50 PM on 8th November 2024
let targetDate = new Date("November 8, 2024 23:59:50");
let timerStopped = false; // Variable to track if the timer should stop
let midnightReached = false; // To track if midnight has passed

function updateTimer() {
    if (timerStopped) return; // If the timer has stopped, do not update anymore

    let now = new Date();
    let timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        // If the target time is reached, stop the timer and increment the date
        targetDate.setDate(targetDate.getDate() + 1);  // Increment date by one day
        targetDate.setHours(0, 0, 0, 0);  // Reset time to 00:00:00 AM

        document.getElementById("time").innerText = targetDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true});
        document.getElementById("date").innerText = targetDate.toLocaleDateString("en-GB", { day: 'numeric', month: 'long', year: 'numeric' });

        midnightReached = true; // Mark that midnight has been reached
        timerStopped = true; // Stop the timer
        setTimeout(enableButton, 10000); // Wait 10 seconds after midnight to enable the button
        return;  // Exit function once the timer is stopped
    }

    // Update the time and date every second
    let time = new Date(targetDate);
    let formattedTime = time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true});
    let formattedDate = time.toLocaleDateString("en-GB", { day: 'numeric', month: 'long', year: 'numeric' });

    document.getElementById("time").innerText = formattedTime;
    document.getElementById("date").innerText = formattedDate;

    // Increment the time by one second
    targetDate.setSeconds(targetDate.getSeconds() + 1);
}

// Function to enable the button after 10 seconds
// Function to enable the "See Surprise" button after 10 seconds
function enableButton() {
    document.getElementById("surpriseButton").disabled = false; // Enable the button
}

// Wait for 10 seconds after page load, then enable the button
setTimeout(enableButton, 10000); // 10000 milliseconds = 10 seconds

// Function to navigate to "wish.html" when the button is clicked
function showSurprise() {
    window.location.href = "wish.html"; // Navigate to wish.html
}


// Update the timer every 1 second
setInterval(updateTimer, 1000);

// Initialize with the first update
updateTimer();

// Function to navigate to "wish.html" when the button is clicked
function showSurprise() {
    window.location.href = "wait.html"; // Navigate to wish.html
}
