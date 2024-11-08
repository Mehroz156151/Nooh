document.addEventListener("DOMContentLoaded", function() {
    let countdownValue = 3; // Start countdown from 3
    const timerElement = document.getElementById("timer");

    // Countdown logic
    const countdownInterval = setInterval(function() {
        timerElement.textContent = countdownValue;
        countdownValue--;

        // When countdown reaches 0, redirect to the wish page
        if (countdownValue < 0) {
            clearInterval(countdownInterval);
            window.location.href = "video.html"; // Redirect to wish page
        }
    }, 1000);
});
